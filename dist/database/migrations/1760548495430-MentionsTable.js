"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentionsTable1760548495430 = void 0;
class MentionsTable1760548495430 {
    constructor() {
        this.name = 'MentionsTable1760548495430';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."mentions_targettype_enum" AS ENUM('POST', 'COMMENT')`);
        await queryRunner.query(`CREATE TABLE "mentions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "targetType" "public"."mentions_targettype_enum" NOT NULL, "postId" uuid, "commentId" uuid, "mentionedUserId" uuid NOT NULL, "createdByUserId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2c728c4685beaa7be19e11eae42" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_mentions_user" ON "mentions" ("mentionedUserId") `);
        await queryRunner.query(`CREATE INDEX "idx_mentions_comment" ON "mentions" ("targetType", "commentId") `);
        await queryRunner.query(`CREATE INDEX "idx_mentions_post" ON "mentions" ("targetType", "postId") `);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`ALTER TABLE "mentions" ADD CONSTRAINT "FK_aea5dc844133160ab72e5bf24f6" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mentions" ADD CONSTRAINT "FK_e6c65ec041bd20359f76d45be5c" FOREIGN KEY ("commentId") REFERENCES "post_comments"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mentions" ADD CONSTRAINT "FK_792834970fe9c4fcda3ea31a06c" FOREIGN KEY ("mentionedUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "mentions" DROP CONSTRAINT "FK_792834970fe9c4fcda3ea31a06c"`);
        await queryRunner.query(`ALTER TABLE "mentions" DROP CONSTRAINT "FK_e6c65ec041bd20359f76d45be5c"`);
        await queryRunner.query(`ALTER TABLE "mentions" DROP CONSTRAINT "FK_aea5dc844133160ab72e5bf24f6"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP INDEX "public"."idx_mentions_post"`);
        await queryRunner.query(`DROP INDEX "public"."idx_mentions_comment"`);
        await queryRunner.query(`DROP INDEX "public"."idx_mentions_user"`);
        await queryRunner.query(`DROP TABLE "mentions"`);
        await queryRunner.query(`DROP TYPE "public"."mentions_targettype_enum"`);
    }
}
exports.MentionsTable1760548495430 = MentionsTable1760548495430;
//# sourceMappingURL=1760548495430-MentionsTable.js.map