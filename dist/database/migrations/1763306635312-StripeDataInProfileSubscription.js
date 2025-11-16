"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeDataInProfileSubscription1763306635312 = void 0;
class StripeDataInProfileSubscription1763306635312 {
    constructor() {
        this.name = 'StripeDataInProfileSubscription1763306635312';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "stripeSubscriptionId" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" ADD "stripeCustomerId" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_c72848c842cd1f2fc5188ec8e0" ON "profile_subscriptions" ("stripeSubscriptionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a15ec14fe348cf70ef7cb2fcfc" ON "profile_subscriptions" ("stripeCustomerId") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_a15ec14fe348cf70ef7cb2fcfc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c72848c842cd1f2fc5188ec8e0"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "stripeCustomerId"`);
        await queryRunner.query(`ALTER TABLE "profile_subscriptions" DROP COLUMN "stripeSubscriptionId"`);
    }
}
exports.StripeDataInProfileSubscription1763306635312 = StripeDataInProfileSubscription1763306635312;
//# sourceMappingURL=1763306635312-StripeDataInProfileSubscription.js.map