"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeletedTable1759491136791 = void 0;
class PostDeletedTable1759491136791 {
    constructor() {
        this.name = 'PostDeletedTable1759491136791';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."posts_deleted_accesstype_enum" AS ENUM('PUBLIC', 'SUBSCRIBER')`);
        await queryRunner.query(`CREATE TYPE "public"."posts_deleted_type_enum" AS ENUM('TEXT', 'MEDIA', 'POLL', 'FILE')`);
        await queryRunner.query(`CREATE TABLE "posts_deleted" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "originalPostId" uuid NOT NULL, "profileId" uuid NOT NULL, "caption" text, "hashtagsText" text, "accessType" "public"."posts_deleted_accesstype_enum" NOT NULL, "type" "public"."posts_deleted_type_enum" NOT NULL, "inPortfolio" boolean NOT NULL DEFAULT false, "likeCount" integer NOT NULL DEFAULT '0', "dislikeCount" integer NOT NULL DEFAULT '0', "commentCount" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_dfc8679bb798520a27c4dbe7c4b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b090d102646b23c21d7cb952c3" ON "posts_deleted" ("originalPostId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e0f2112b1fa4bafa78d0e4810f" ON "posts_deleted" ("profileId") `);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e0f2112b1fa4bafa78d0e4810f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b090d102646b23c21d7cb952c3"`);
        await queryRunner.query(`DROP TABLE "posts_deleted"`);
        await queryRunner.query(`DROP TYPE "public"."posts_deleted_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."posts_deleted_accesstype_enum"`);
    }
}
exports.PostDeletedTable1759491136791 = PostDeletedTable1759491136791;
//# sourceMappingURL=1759491136791-PostDeletedTable.js.map