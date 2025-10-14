"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeleteTrigger1760452262823 = void 0;
class PostDeleteTrigger1760452262823 {
    constructor() {
        this.name = 'PostDeleteTrigger1760452262823';
    }
    async up(queryRunner) {
        await queryRunner.query(`
      ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[];
      ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[];
      ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}';
    `);
        await queryRunner.query(`
      CREATE OR REPLACE FUNCTION trg_posts_archive_and_flag_typesense()
      RETURNS TRIGGER
      LANGUAGE plpgsql
      AS $$
      BEGIN
        INSERT INTO "posts_deleted" (
          "originalPostId",
          "profileId",
          "caption",
          "hashtagsText",
          "accessType",
          "type",
          "inPortfolio",
          "createdAt",
          "updatedAt",
          "deletedAt",
          "typesenseNeedsDelete",
          "typesenseAttempts",
          "typesenseLastError",
          "typesenseDeletedAt"
        )
        VALUES (
          OLD."id",
          OLD."profileId",
          OLD."caption",
          OLD."hashtagsText",
          OLD."accessType",
          OLD."type",
          OLD."inPortfolio",
          OLD."createdAt",
          OLD."updatedAt",
          NOW(),
          TRUE,
          0,
          NULL,
          NULL
        );

        RETURN OLD; -- AFTER DELETE must return OLD
      END;
      $$;
    `);
        await queryRunner.query(`
      DROP TRIGGER IF EXISTS posts_archive_and_flag_typesense_trg ON "posts";
      CREATE TRIGGER posts_archive_and_flag_typesense_trg
      AFTER DELETE ON "posts"
      FOR EACH ROW
      EXECUTE FUNCTION trg_posts_archive_and_flag_typesense();
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      DROP TRIGGER IF EXISTS posts_archive_and_flag_typesense_trg ON "posts";
      DROP FUNCTION IF EXISTS trg_posts_archive_and_flag_typesense();
    `);
        await queryRunner.query(`
      ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}';
      ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}';
      ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}';
    `);
    }
}
exports.PostDeleteTrigger1760452262823 = PostDeleteTrigger1760452262823;
//# sourceMappingURL=1760452262823-PostDeleteTrigger.js.map