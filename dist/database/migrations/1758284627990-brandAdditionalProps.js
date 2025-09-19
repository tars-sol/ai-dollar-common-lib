"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandAdditionalProps1758284627990 = void 0;
class BrandAdditionalProps1758284627990 {
    constructor() {
        this.name = 'BrandAdditionalProps1758284627990';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "brands" ADD "discord" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "twitter" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "telegram" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "tags" text array NOT NULL DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "campaignCount" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "tokenName" character varying`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "tokenName"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "campaignCount"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "telegram"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "twitter"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "discord"`);
    }
}
exports.BrandAdditionalProps1758284627990 = BrandAdditionalProps1758284627990;
//# sourceMappingURL=1758284627990-brandAdditionalProps.js.map