import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSocials1758187123116 implements MigrationInterface {
    name = 'AddSocials1758187123116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" ADD "telegram" character varying`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "discord" character varying`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "discord"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "telegram"`);
    }

}
