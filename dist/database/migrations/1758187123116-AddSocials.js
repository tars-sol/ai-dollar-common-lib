"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSocials1758187123116 = void 0;
class AddSocials1758187123116 {
    constructor() {
        this.name = 'AddSocials1758187123116';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profiles" ADD "telegram" character varying`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "discord" character varying`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "discord"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "telegram"`);
    }
}
exports.AddSocials1758187123116 = AddSocials1758187123116;
//# sourceMappingURL=1758187123116-AddSocials.js.map