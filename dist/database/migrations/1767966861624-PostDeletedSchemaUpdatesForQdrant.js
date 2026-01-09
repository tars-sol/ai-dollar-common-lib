"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeletedSchemaUpdatesForQdrant1767966861624 = void 0;
class PostDeletedSchemaUpdatesForQdrant1767966861624 {
    constructor() {
        this.name = 'PostDeletedSchemaUpdatesForQdrant1767966861624';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantNeedsDelete" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantAttempts" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantLastError" text`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantDeletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_4462b91608e60e3d1fc097b700" ON "posts_deleted" ("qdrantNeedsDelete") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_4462b91608e60e3d1fc097b700"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "qdrantDeletedAt"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "qdrantLastError"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "qdrantAttempts"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "qdrantNeedsDelete"`);
    }
}
exports.PostDeletedSchemaUpdatesForQdrant1767966861624 = PostDeletedSchemaUpdatesForQdrant1767966861624;
//# sourceMappingURL=1767966861624-PostDeletedSchemaUpdatesForQdrant.js.map