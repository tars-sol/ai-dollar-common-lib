import { MigrationInterface, QueryRunner } from "typeorm";

export class PostDeletedSchemaUpdatesForQdrant1767966861624 implements MigrationInterface {
    name = 'PostDeletedSchemaUpdatesForQdrant1767966861624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantNeedsDelete" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantAttempts" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantLastError" text`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "qdrantDeletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_4462b91608e60e3d1fc097b700" ON "posts_deleted" ("qdrantNeedsDelete") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
