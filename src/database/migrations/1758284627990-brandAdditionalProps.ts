import { MigrationInterface, QueryRunner } from "typeorm";

export class BrandAdditionalProps1758284627990 implements MigrationInterface {
    name = 'BrandAdditionalProps1758284627990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brands" ADD "discord" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "twitter" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "telegram" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "tags" text array NOT NULL DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "campaignCount" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "tokenName" character varying`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "tokenName"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "campaignCount"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "telegram"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "twitter"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "discord"`);
    }

}
