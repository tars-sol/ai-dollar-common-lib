import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentJsonInArticle1760012549928 implements MigrationInterface {
    name = 'ContentJsonInArticle1760012549928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "accessType" TO "contentJson"`);
        await queryRunner.query(`ALTER TYPE "public"."articles_accesstype_enum" RENAME TO "articles_contentjson_enum"`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "contentJson"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "contentJson" jsonb NOT NULL DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "contentJson"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "contentJson" "public"."articles_contentjson_enum" NOT NULL DEFAULT 'PUBLIC'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TYPE "public"."articles_contentjson_enum" RENAME TO "articles_accesstype_enum"`);
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "contentJson" TO "accessType"`);
    }

}
