import { MigrationInterface, QueryRunner } from "typeorm";

export class BrandDailyMetrics1764619675303 implements MigrationInterface {
    name = 'BrandDailyMetrics1764619675303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brand_daily_metrics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brandId" uuid NOT NULL, "date" date NOT NULL, "payoutsCents" bigint NOT NULL DEFAULT '0', "followersTotal" bigint NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "u_brand_daily_metrics_brand_date" UNIQUE ("brandId", "date"), CONSTRAINT "PK_714bc133f2367760c1066d4230a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e994585cead80c9ae50b9b8ddb" ON "brand_daily_metrics" ("brandId", "date") `);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e994585cead80c9ae50b9b8ddb"`);
        await queryRunner.query(`DROP TABLE "brand_daily_metrics"`);
    }

}
