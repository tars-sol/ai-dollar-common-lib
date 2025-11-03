import { MigrationInterface, QueryRunner } from "typeorm";

export class BrandURL1762162998973 implements MigrationInterface {
    name = 'BrandURL1762162998973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brands" ADD "bannerUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "bannerUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "bannerUrl"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "bannerUrl"`);
    }

}
