import { MigrationInterface, QueryRunner } from "typeorm";

export class INAPPTASKUpdate1759847316316 implements MigrationInterface {
    name = 'INAPPTASKUpdate1759847316316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_7878421463d66fd7f96a2433bc2"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "campaignId"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "rule" jsonb NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "progressCount" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "isCompletedByServer" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "completedAt" TIMESTAMP`);
        await queryRunner.query(`CREATE TYPE "public"."profile_task_progress_computedby_enum" AS ENUM('SERVER', 'BRAND', 'MIXED')`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "computedBy" "public"."profile_task_progress_computedby_enum" NOT NULL DEFAULT 'SERVER'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "evidence" jsonb NOT NULL DEFAULT '[]'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "profileCampaignId"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "profileCampaignId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_52ec286a4d42c194f67cf8be85c" FOREIGN KEY ("profileCampaignId") REFERENCES "profile_campaigns"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_52ec286a4d42c194f67cf8be85c"`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "profileCampaignId"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "profileCampaignId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "evidence"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "computedBy"`);
        await queryRunner.query(`DROP TYPE "public"."profile_task_progress_computedby_enum"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "completedAt"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "isCompletedByServer"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP COLUMN "progressCount"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "rule"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD "campaignId" uuid`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_7878421463d66fd7f96a2433bc2" FOREIGN KEY ("campaignId") REFERENCES "profile_campaigns"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
