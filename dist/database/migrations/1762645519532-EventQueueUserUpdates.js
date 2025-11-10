"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventQueueUserUpdates1762645519532 = void 0;
class EventQueueUserUpdates1762645519532 {
    constructor() {
        this.name = 'EventQueueUserUpdates1762645519532';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "subscription_tiers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "creatorId" uuid NOT NULL, "name" character varying(255) NOT NULL, "description" text, "stripeProductId" character varying NOT NULL, "monthlyStripePriceId" character varying NOT NULL, "monthlyPriceCents" integer NOT NULL, "annualStripePriceId" character varying NOT NULL, "annualPriceCents" integer NOT NULL, "currency" character varying(10) NOT NULL DEFAULT 'usd', "accessMask" integer NOT NULL DEFAULT '0', "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_376aa3503bf3278d69af3d711b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_3c7f89dd8aa47abd6eb331be1f" ON "subscription_tiers" ("monthlyStripePriceId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_592c61e590c79520d647df38fb" ON "subscription_tiers" ("annualStripePriceId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_7bcf96dba936e3b3e0a9fcd002" ON "subscription_tiers" ("creatorId", "name") `);
        await queryRunner.query(`ALTER TABLE "event_queue_user" ADD "exchange" text`);
        await queryRunner.query(`ALTER TABLE "event_queue_user" ADD "queue" text`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_3b00b40a599f8d2b3317c96aea" ON "event_queue_user" ("exchange") `);
        await queryRunner.query(`CREATE INDEX "IDX_9c0284d69c986b5bcfbbdd5977" ON "event_queue_user" ("queue") `);
        await queryRunner.query(`ALTER TABLE "subscription_tiers" ADD CONSTRAINT "FK_b2133f9825c2bdc47d295fa855f" FOREIGN KEY ("creatorId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "subscription_tiers" DROP CONSTRAINT "FK_b2133f9825c2bdc47d295fa855f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9c0284d69c986b5bcfbbdd5977"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3b00b40a599f8d2b3317c96aea"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "event_queue_user" DROP COLUMN "queue"`);
        await queryRunner.query(`ALTER TABLE "event_queue_user" DROP COLUMN "exchange"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7bcf96dba936e3b3e0a9fcd002"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_592c61e590c79520d647df38fb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3c7f89dd8aa47abd6eb331be1f"`);
        await queryRunner.query(`DROP TABLE "subscription_tiers"`);
    }
}
exports.EventQueueUserUpdates1762645519532 = EventQueueUserUpdates1762645519532;
//# sourceMappingURL=1762645519532-EventQueueUserUpdates.js.map