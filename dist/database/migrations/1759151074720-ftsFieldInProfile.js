"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtsFieldInProfile1759151074720 = void 0;
class FtsFieldInProfile1759151074720 {
    constructor() {
        this.name = 'FtsFieldInProfile1759151074720';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profiles" ADD "fts" tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||
    setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')
  ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "profiles", "GENERATED_COLUMN", "fts", "\n    setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||\n    setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')\n  "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "fts", "aidollar", "public", "profiles"]);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "fts"`);
    }
}
exports.FtsFieldInProfile1759151074720 = FtsFieldInProfile1759151074720;
//# sourceMappingURL=1759151074720-ftsFieldInProfile.js.map