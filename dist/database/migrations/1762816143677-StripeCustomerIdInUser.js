"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCustomerIdInUser1762816143677 = void 0;
class StripeCustomerIdInUser1762816143677 {
    constructor() {
        this.name = 'StripeCustomerIdInUser1762816143677';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "stripeCustomerId" character varying`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_eb6893f4cd2998607548134a7c" ON "users" ("stripeCustomerId") WHERE "stripeCustomerId" IS NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_eb6893f4cd2998607548134a7c"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "stripeCustomerId"`);
    }
}
exports.StripeCustomerIdInUser1762816143677 = StripeCustomerIdInUser1762816143677;
//# sourceMappingURL=1762816143677-StripeCustomerIdInUser.js.map