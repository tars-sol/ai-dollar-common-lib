import { MigrationInterface, QueryRunner } from "typeorm";

export class ReplaceUserPropTaskProgress1760617856125 implements MigrationInterface {
    name = 'ReplaceUserPropTaskProgress1760617856125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_2af52a0869774bf851ee7ff140c"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "UQ_a5c6e2a569f89cf6dfe83384e6e"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" RENAME COLUMN "userId" TO "profileId"`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "UQ_dc4174f93222d9c98b9bc2b2e25" UNIQUE ("profileId", "taskId")`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_5732619d480eca9bbc143d108b3" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_5732619d480eca9bbc143d108b3"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "UQ_dc4174f93222d9c98b9bc2b2e25"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" RENAME COLUMN "profileId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "UQ_a5c6e2a569f89cf6dfe83384e6e" UNIQUE ("userId", "taskId")`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_2af52a0869774bf851ee7ff140c" FOREIGN KEY ("userId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
