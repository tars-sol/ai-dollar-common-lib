import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectedAccounts1759134979466 implements MigrationInterface {
    name = 'ConnectedAccounts1759134979466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."idx_profiles_fts"`);
        await queryRunner.query(`CREATE TABLE "profile_task_progress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "taskId" uuid NOT NULL, "profileCampaignId" character varying NOT NULL, "isMarkedDoneByBrand" boolean NOT NULL DEFAULT false, "brandComment" text, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "campaignId" uuid, CONSTRAINT "UQ_a5c6e2a569f89cf6dfe83384e6e" UNIQUE ("userId", "taskId"), CONSTRAINT "PK_4303350bec0f4dec19eb8669f98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "connected_Accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "accountId" character varying NOT NULL, "email" character varying(100) NOT NULL, "isActive" boolean NOT NULL, "profileId" uuid NOT NULL, "onBoardingUrl" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_656996905dd36aaffe0925d5bad" UNIQUE ("accountId"), CONSTRAINT "REL_f9c3ea7726833d7688bcb1a30f" UNIQUE ("profileId"), CONSTRAINT "PK_98d13ee5974c5875c3c93d4a166" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "fts"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN","fts","ai-dollar-dev","public","profiles"]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_2af52a0869774bf851ee7ff140c" FOREIGN KEY ("userId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_d074699e23d56a87869c430ebec" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" ADD CONSTRAINT "FK_7878421463d66fd7f96a2433bc2" FOREIGN KEY ("campaignId") REFERENCES "profile_campaigns"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "connected_Accounts" ADD CONSTRAINT "FK_f9c3ea7726833d7688bcb1a30fd" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "connected_Accounts" DROP CONSTRAINT "FK_f9c3ea7726833d7688bcb1a30fd"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_7878421463d66fd7f96a2433bc2"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_d074699e23d56a87869c430ebec"`);
        await queryRunner.query(`ALTER TABLE "profile_task_progress" DROP CONSTRAINT "FK_2af52a0869774bf851ee7ff140c"`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["ai-dollar-dev","public","profiles","GENERATED_COLUMN","fts",""]);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "fts" tsvector`);
        await queryRunner.query(`DROP TABLE "connected_Accounts"`);
        await queryRunner.query(`DROP TABLE "profile_task_progress"`);
        await queryRunner.query(`CREATE INDEX "idx_profiles_fts" ON "profiles" ("fts") `);
    }

}
