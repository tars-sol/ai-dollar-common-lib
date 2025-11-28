import { MigrationInterface, QueryRunner } from "typeorm";

export class ViewesAndEarningInProfile1764358343927 implements MigrationInterface {
    name = 'ViewesAndEarningInProfile1764358343927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" ADD "viewsCount" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "earningCents" bigint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "earningCents"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "viewsCount"`);
    }

}
