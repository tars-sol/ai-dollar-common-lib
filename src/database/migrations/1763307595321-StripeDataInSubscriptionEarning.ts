import { MigrationInterface, QueryRunner } from "typeorm";

export class StripeDataInSubscriptionEarning1763307595321 implements MigrationInterface {
    name = 'StripeDataInSubscriptionEarning1763307595321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription_earnings" ADD "stripeInvoiceId" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "subscription_earnings" ADD "stripePaymentIntentId" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1dfd16a08a8ef0108898857a24" ON "subscription_earnings" ("stripeInvoiceId") WHERE "stripeInvoiceId" IS NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_7699e1237b047d8e479d3484bf" ON "subscription_earnings" ("stripePaymentIntentId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_7699e1237b047d8e479d3484bf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1dfd16a08a8ef0108898857a24"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "subscription_earnings" DROP COLUMN "stripePaymentIntentId"`);
        await queryRunner.query(`ALTER TABLE "subscription_earnings" DROP COLUMN "stripeInvoiceId"`);
    }

}
