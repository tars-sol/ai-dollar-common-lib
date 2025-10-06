"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtsFieldInCampaign1759755310137 = void 0;
class FtsFieldInCampaign1759755310137 {
    constructor() {
        this.name = 'FtsFieldInCampaign1759755310137';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "campaigns" ADD "fts" tsvector GENERATED ALWAYS AS (
      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')
    ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "campaigns", "GENERATED_COLUMN", "fts", "\n      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')\n    "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "fts", "aidollar", "public", "campaigns"]);
        await queryRunner.query(`ALTER TABLE "campaigns" DROP COLUMN "fts"`);
    }
}
exports.FtsFieldInCampaign1759755310137 = FtsFieldInCampaign1759755310137;
//# sourceMappingURL=1759755310137-FtsFieldInCampaign.js.map