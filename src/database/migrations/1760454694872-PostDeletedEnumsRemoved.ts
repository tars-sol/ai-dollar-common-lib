import { MigrationInterface, QueryRunner } from "typeorm";

export class PostDeletedEnumsRemoved1760454694872 implements MigrationInterface {
    name = 'PostDeletedEnumsRemoved1760454694872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "accessType"`);
        await queryRunner.query(`DROP TYPE "public"."posts_deleted_accesstype_enum"`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."posts_deleted_type_enum"`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`CREATE TYPE "public"."posts_deleted_type_enum" AS ENUM('TEXT', 'MEDIA', 'POLL', 'FILE', 'ARTICLE')`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "type" "public"."posts_deleted_type_enum" NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."posts_deleted_accesstype_enum" AS ENUM('PUBLIC', 'SUBSCRIBER')`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ADD "accessType" "public"."posts_deleted_accesstype_enum" NOT NULL`);
    }

}
