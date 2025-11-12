import { MigrationInterface, QueryRunner } from "typeorm";

export class SubscriptionEarningsUpdates1762910842403 implements MigrationInterface {
    name = 'SubscriptionEarningsUpdates1762910842403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_e9894b33c276be115664c9625c"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP CONSTRAINT "CHK_62bc3cb73f2f270454d99e49d8"`);
        await queryRunner.query(`CREATE TYPE "public"."subscription_earnings_status_enum" AS ENUM('PENDING', 'AVAILABLE', 'WITHHELD', 'TRANSFERRED', 'REFUNDED', 'REVERSED', 'CHARGEBACK', 'TRANSFER_FAILED')`);
        await queryRunner.query(`CREATE TABLE "subscription_earnings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subscriptionId" uuid NOT NULL, "amountCents" bigint NOT NULL, "currency" character varying(10) NOT NULL DEFAULT 'usd', "availableAt" TIMESTAMP WITH TIME ZONE NOT NULL, "status" "public"."subscription_earnings_status_enum" NOT NULL DEFAULT 'PENDING', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c18a17aca8b5ac2d252e32c8d70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_12ee0fa27c25139da7ef10324f" ON "subscription_earnings" ("subscriptionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d2b8437f532910bb5875da832c" ON "subscription_earnings" ("availableAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_1590101d94c057e855de6daba1" ON "subscription_earnings" ("status") `);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "tierId" uuid`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "currentPeriodStart" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "currentPeriodEnd" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "cancelAtPeriodEnd" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_bcf90dc6462d4bd688ee0d859c" ON "profile_subscriptions" ("currentPeriodEnd") `);
        await queryRunner.query(`CREATE INDEX "IDX_8b0247c14ae54a0808b98c22a9" ON "profile_subscriptions" ("tierId") `);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD CONSTRAINT "u_subscriber_creator" UNIQUE ("subscriberId", "creatorId")`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD CONSTRAINT "FK_8b0247c14ae54a0808b98c22a90" FOREIGN KEY ("tierId") REFERENCES "subscription_tiers"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription_earnings" ADD CONSTRAINT "FK_12ee0fa27c25139da7ef10324fd" FOREIGN KEY ("subscriptionId") REFERENCES "profile_subscriptions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription_earnings" DROP CONSTRAINT "FK_12ee0fa27c25139da7ef10324fd"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP CONSTRAINT "FK_8b0247c14ae54a0808b98c22a90"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP CONSTRAINT "u_subscriber_creator"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8b0247c14ae54a0808b98c22a9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bcf90dc6462d4bd688ee0d859c"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "cancelAtPeriodEnd"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "currentPeriodEnd"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "currentPeriodStart"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "tierId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1590101d94c057e855de6daba1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d2b8437f532910bb5875da832c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_12ee0fa27c25139da7ef10324f"`);
        await queryRunner.query(`DROP TABLE "subscription_earnings"`);
        await queryRunner.query(`DROP TYPE "public"."subscription_earnings_status_enum"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD CONSTRAINT "CHK_62bc3cb73f2f270454d99e49d8" CHECK (("subscriberId" <> "creatorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e9894b33c276be115664c9625c" ON "profile_subscriptions" ("subscriberId", "creatorId") `);
    }

}
