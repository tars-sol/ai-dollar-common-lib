import { MigrationInterface, QueryRunner } from "typeorm";

export class FtsFieldInPost1759325465579 implements MigrationInterface {
    name = 'FtsFieldInPost1759325465579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "hashtagsText" text`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "fts" tsvector GENERATED ALWAYS AS (
      setweight(to_tsvector('english_unaccent', coalesce("hashtagsText", '')), 'A')
    ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar","public","posts","GENERATED_COLUMN","fts","\n      setweight(to_tsvector('english_unaccent', coalesce(\"hashtagsText\", '')), 'A')\n    "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN","fts","aidollar","public","posts"]);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "fts"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "hashtagsText"`);
    }

}
