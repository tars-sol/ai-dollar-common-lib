"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameCampaignRulesUpdate1760094312875 = void 0;
class UsernameCampaignRulesUpdate1760094312875 {
    constructor() {
        this.name = 'UsernameCampaignRulesUpdate1760094312875';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "brands" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "brands" ADD CONSTRAINT "UQ_43595d7b0880a3f033d6f74cd9f" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "rule" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "rule" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "rule" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "rule" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" DROP CONSTRAINT "UQ_43595d7b0880a3f033d6f74cd9f"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "username"`);
    }
}
exports.UsernameCampaignRulesUpdate1760094312875 = UsernameCampaignRulesUpdate1760094312875;
//# sourceMappingURL=1760094312875-Username_CampaignRules_Update.js.map