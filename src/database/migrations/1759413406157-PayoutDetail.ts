import { MigrationInterface, QueryRunner } from "typeorm";

export class PayoutDetail1759413406157 implements MigrationInterface {
    name = 'PayoutDetail1759413406157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."payouts_status_enum" AS ENUM('pending', 'succeeded', 'failed')`);
        await queryRunner.query(`CREATE TABLE "payouts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" numeric(12,2) NOT NULL, "currency" character varying(10) NOT NULL, "transactionId" character varying NOT NULL, "status" "public"."payouts_status_enum" NOT NULL DEFAULT 'pending', "brandId" uuid NOT NULL, "campaignId" uuid, "profileId" character varying NOT NULL, "paidOn" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_44842ff5d94ebe83c39faaa19b1" UNIQUE ("transactionId"), CONSTRAINT "PK_76855dc4f0a6c18c72eea302e87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "campaigns" ADD "availableBudget" numeric(12,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "campaigns" ADD "amountPaid" numeric(12,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "campaigns" ADD "totalParticipants" numeric`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD "completed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD "completedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD "rewarded" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" ADD "rewardedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "payouts" ADD CONSTRAINT "FK_15a08cf3635e8cf3d47371222da" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payouts" ADD CONSTRAINT "FK_30f364aa92410ecf09b4d4dcadb" FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payouts" DROP CONSTRAINT "FK_30f364aa92410ecf09b4d4dcadb"`);
        await queryRunner.query(`ALTER TABLE "payouts" DROP CONSTRAINT "FK_15a08cf3635e8cf3d47371222da"`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP COLUMN "rewardedAt"`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP COLUMN "rewarded"`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP COLUMN "completedAt"`);
        await queryRunner.query(`ALTER TABLE "profile_campaigns" DROP COLUMN "completed"`);
        await queryRunner.query(`ALTER TABLE "campaigns" DROP COLUMN "totalParticipants"`);
        await queryRunner.query(`ALTER TABLE "campaigns" DROP COLUMN "amountPaid"`);
        await queryRunner.query(`ALTER TABLE "campaigns" DROP COLUMN "availableBudget"`);
        await queryRunner.query(`DROP TABLE "payouts"`);
        await queryRunner.query(`DROP TYPE "public"."payouts_status_enum"`);
    }

}
