import { MigrationInterface, QueryRunner } from "typeorm";

export class FtsFieldInUser1760635248635 implements MigrationInterface {
    name = 'FtsFieldInUser1760635248635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "fts" tsvector GENERATED ALWAYS AS (
      setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||
      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')
    ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar","public","users","GENERATED_COLUMN","fts","\n      setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||\n      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')\n    "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN","fts","aidollar","public","users"]);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "fts"`);
    }

}
