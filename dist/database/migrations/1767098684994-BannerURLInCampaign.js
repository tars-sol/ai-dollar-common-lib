"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerURLInCampaign1767098684994 = void 0;
class BannerURLInCampaign1767098684994 {
    constructor() {
        this.name = 'BannerURLInCampaign1767098684994';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "campaigns" ADD "bannerUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "campaigns" DROP COLUMN "bannerUrl"`);
    }
}
exports.BannerURLInCampaign1767098684994 = BannerURLInCampaign1767098684994;
//# sourceMappingURL=1767098684994-BannerURLInCampaign.js.map