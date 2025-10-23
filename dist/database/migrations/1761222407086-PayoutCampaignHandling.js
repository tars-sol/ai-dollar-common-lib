"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutCampaignHandling1761222407086 = void 0;
class PayoutCampaignHandling1761222407086 {
    constructor() {
        this.name = 'PayoutCampaignHandling1761222407086';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD "payoutId" uuid`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD CONSTRAINT "UQ_3a355fafdc6ad8e275ad4011e47" UNIQUE ("payoutId")`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD CONSTRAINT "FK_3a355fafdc6ad8e275ad4011e47" FOREIGN KEY ("payoutId") REFERENCES "payouts"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP CONSTRAINT "FK_3a355fafdc6ad8e275ad4011e47"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP CONSTRAINT "UQ_3a355fafdc6ad8e275ad4011e47"`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP COLUMN "payoutId"`);
    }
}
exports.PayoutCampaignHandling1761222407086 = PayoutCampaignHandling1761222407086;
//# sourceMappingURL=1761222407086-PayoutCampaignHandling.js.map