import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveTaskQueue1763561574955 implements MigrationInterface {
    name = 'RemoveTaskQueue1763561574955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_queue_post" ADD "exchange" text`);
        await queryRunner.query(`ALTER TABLE "event_queue_post" ADD "queue" text`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`CREATE INDEX "IDX_a9533ed111726950891d7fc88d" ON "event_queue_post" ("exchange") `);
        await queryRunner.query(`CREATE INDEX "IDX_bc429a0e00d26dd80a7cb2a0df" ON "event_queue_post" ("queue") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_bc429a0e00d26dd80a7cb2a0df"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a9533ed111726950891d7fc88d"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "event_queue_post" DROP COLUMN "queue"`);
        await queryRunner.query(`ALTER TABLE "event_queue_post" DROP COLUMN "exchange"`);
    }

}
