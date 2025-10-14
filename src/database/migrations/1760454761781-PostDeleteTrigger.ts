import { MigrationInterface, QueryRunner } from "typeorm";

export class PostDeleteTrigger1760454761781 implements MigrationInterface {
  name = "PostDeleteTrigger1760454761781";

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Keep your existing default value fixes
    await queryRunner.query(`
      ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[];
      ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[];
      ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}';
    `);

    // Create trigger function — no accessType or type fields
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

    // Bind the trigger to posts table
    await queryRunner.query(`
      DROP TRIGGER IF EXISTS posts_archive_and_flag_typesense_trg ON "posts";
      CREATE TRIGGER posts_archive_and_flag_typesense_trg
      AFTER DELETE ON "posts"
      FOR EACH ROW
      EXECUTE FUNCTION trg_posts_archive_and_flag_typesense();
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop trigger and function
    await queryRunner.query(`
      DROP TRIGGER IF EXISTS posts_archive_and_flag_typesense_trg ON "posts";
      DROP FUNCTION IF EXISTS trg_posts_archive_and_flag_typesense();
    `);

    // Revert defaults
    await queryRunner.query(`
      ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}';
      ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}';
      ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}';
    `);
  }
}
