import { MigrationInterface, QueryRunner } from "typeorm";

export class ProfileSubscriptionUpdatesForNewUI1768216258214 implements MigrationInterface {
    name = 'ProfileSubscriptionUpdatesForNewUI1768216258214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."profile_subscriptions_billinginterval_enum" AS ENUM('MONTHLY', 'ANNUAL')`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "billingInterval" "public"."profile_subscriptions_billinginterval_enum"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "billingPriceCents" integer`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "billingCurrency" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "lastInvoiceId" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "lastPaidAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_c139924e62aba68dc6668d336c" ON "profile_subscriptions" ("lastInvoiceId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_c139924e62aba68dc6668d336c"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "lastPaidAt"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "lastInvoiceId"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "billingCurrency"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "billingPriceCents"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "billingInterval"`);
        await queryRunner.query(`DROP TYPE "public"."profile_subscriptions_billinginterval_enum"`);
    }

}
