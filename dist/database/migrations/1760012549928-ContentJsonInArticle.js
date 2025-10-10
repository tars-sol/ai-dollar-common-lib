"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentJsonInArticle1760012549928 = void 0;
class ContentJsonInArticle1760012549928 {
    constructor() {
        this.name = 'ContentJsonInArticle1760012549928';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "accessType" TO "contentJson"`);
        await queryRunner.query(`ALTER TYPE "public"."articles_accesstype_enum" RENAME TO "articles_contentjson_enum"`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "contentJson"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "contentJson" jsonb NOT NULL DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "contentJson"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "contentJson" "public"."articles_contentjson_enum" NOT NULL DEFAULT 'PUBLIC'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TYPE "public"."articles_contentjson_enum" RENAME TO "articles_accesstype_enum"`);
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "contentJson" TO "accessType"`);
    }
}
exports.ContentJsonInArticle1760012549928 = ContentJsonInArticle1760012549928;
//# sourceMappingURL=1760012549928-ContentJsonInArticle.js.map