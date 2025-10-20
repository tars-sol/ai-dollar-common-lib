"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameShift1760635061960 = void 0;
class UsernameShift1760635061960 {
    constructor() {
        this.name = 'UsernameShift1760635061960';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_d1ea35db5be7c08520d70dc03f"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "fts"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "fts", "aidollar", "public", "brands"]);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP CONSTRAINT "UQ_43595d7b0880a3f033d6f74cd9f"`);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "fts"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "fts", "aidollar", "public", "profiles"]);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(64)`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "name" character varying(64)`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "username" character varying(32) NOT NULL`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "profiles", "GENERATED_COLUMN", "fts", "\n    setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||\n    setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')\n  "]);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "fts" tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||
    setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')
  ) STORED`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "brands" ADD CONSTRAINT "UQ_43595d7b0880a3f033d6f74cd9f" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "brands" ADD "name" character varying(64) NOT NULL`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "brands", "GENERATED_COLUMN", "fts", "\n      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')\n    "]);
        await queryRunner.query(`ALTER TABLE "brands" ADD "fts" tsvector GENERATED ALWAYS AS (
      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')
    ) STORED`);
        await queryRunner.query(`CREATE INDEX "idx_profiles_fts" ON "profiles" ("fts") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_d1ea35db5be7c08520d70dc03f" ON "profiles" ("username") `);
        await queryRunner.query(`CREATE INDEX "idx_brands_fts" ON "brands" ("fts") `);
    }
}
exports.UsernameShift1760635061960 = UsernameShift1760635061960;
//# sourceMappingURL=1760635061960-UsernameShift.js.map