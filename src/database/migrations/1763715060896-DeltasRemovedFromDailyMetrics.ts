import { MigrationInterface, QueryRunner } from "typeorm";

export class DeltasRemovedFromDailyMetrics1763715060896 implements MigrationInterface {
    name = 'DeltasRemovedFromDailyMetrics1763715060896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile_daily_metrics" DROP COLUMN "followersDelta"`);
        await queryRunner.query(`ALTER TABLE "profile_daily_metrics" DROP COLUMN "subsDelta"`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_daily_metrics" ADD "subsDelta" bigint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "profile_daily_metrics" ADD "followersDelta" bigint NOT NULL DEFAULT '0'`);
    }

}
