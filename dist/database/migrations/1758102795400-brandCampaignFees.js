"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCampaignFees1758102795400 = void 0;
class BrandCampaignFees1758102795400 {
    constructor() {
        this.name = 'BrandCampaignFees1758102795400';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "payments" ADD "fees" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payments" ADD "paidOn" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "brand_balances" ADD "totalFeesCollected" numeric(12,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "brand_balances" ALTER COLUMN "available" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "brand_balances" ALTER COLUMN "available" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "brand_balances" ALTER COLUMN "available" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "brand_balances" ALTER COLUMN "available" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brand_balances" DROP COLUMN "totalFeesCollected"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "paidOn"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "fees"`);
    }
}
exports.BrandCampaignFees1758102795400 = BrandCampaignFees1758102795400;
//# sourceMappingURL=1758102795400-brandCampaignFees.js.map