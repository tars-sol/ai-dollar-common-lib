"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeletedUpdatesForTypesense1760451668674 = void 0;
class PostDeletedUpdatesForTypesense1760451668674 {
    constructor() {
        this.name = 'PostDeletedUpdatesForTypesense1760451668674';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "likeCount"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "dislikeCount"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "commentCount"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "typesenseNeedsDelete" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "typesenseAttempts" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "typesenseLastError" text`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "typesenseDeletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_8b61c625de6af094601e2b72eb" ON "posts_deleted" ("typesenseNeedsDelete") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_8b61c625de6af094601e2b72eb"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "typesenseDeletedAt"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "typesenseLastError"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "typesenseAttempts"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "typesenseNeedsDelete"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "commentCount" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "dislikeCount" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "likeCount" integer NOT NULL DEFAULT '0'`);
    }
}
exports.PostDeletedUpdatesForTypesense1760451668674 = PostDeletedUpdatesForTypesense1760451668674;
//# sourceMappingURL=1760451668674-PostDeletedUpdatesForTypesense.js.map