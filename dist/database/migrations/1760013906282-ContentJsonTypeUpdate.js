"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentJsonTypeUpdate1760013906282 = void 0;
class ContentJsonTypeUpdate1760013906282 {
    constructor() {
        this.name = 'ContentJsonTypeUpdate1760013906282';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
    }
}
exports.ContentJsonTypeUpdate1760013906282 = ContentJsonTypeUpdate1760013906282;
//# sourceMappingURL=1760013906282-ContentJsonTypeUpdate.js.map