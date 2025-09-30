"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtsFieldInBrand1759249431515 = void 0;
class FtsFieldInBrand1759249431515 {
    constructor() {
        this.name = 'FtsFieldInBrand1759249431515';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "brands" ADD "fts" tsvector GENERATED ALWAYS AS (
      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')
    ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "brands", "GENERATED_COLUMN", "fts", "\n      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')\n    "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "fts", "aidollar", "public", "brands"]);
        await queryRunner.query(`ALTER TABLE "brands" DROP COLUMN "fts"`);
    }
}
exports.FtsFieldInBrand1759249431515 = FtsFieldInBrand1759249431515;
//# sourceMappingURL=1759249431515-FtsFieldInBrand.js.map