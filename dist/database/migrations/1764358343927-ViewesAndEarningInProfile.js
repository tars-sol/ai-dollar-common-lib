"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewesAndEarningInProfile1764358343927 = void 0;
class ViewesAndEarningInProfile1764358343927 {
    constructor() {
        this.name = 'ViewesAndEarningInProfile1764358343927';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profiles" ADD "viewsCount" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "earningCents" bigint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "earningCents"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "viewsCount"`);
    }
}
exports.ViewesAndEarningInProfile1764358343927 = ViewesAndEarningInProfile1764358343927;
//# sourceMappingURL=1764358343927-ViewesAndEarningInProfile.js.map