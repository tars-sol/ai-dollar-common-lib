"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtsFieldInPost1759325465579 = void 0;
class FtsFieldInPost1759325465579 {
    constructor() {
        this.name = 'FtsFieldInPost1759325465579';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" ADD "hashtagsText" text`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "fts" tsvector GENERATED ALWAYS AS (
      setweight(to_tsvector('english_unaccent', coalesce("hashtagsText", '')), 'A')
    ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "posts", "GENERATED_COLUMN", "fts", "\n      setweight(to_tsvector('english_unaccent', coalesce(\"hashtagsText\", '')), 'A')\n    "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "fts", "aidollar", "public", "posts"]);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "fts"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "hashtagsText"`);
    }
}
exports.FtsFieldInPost1759325465579 = FtsFieldInPost1759325465579;
//# sourceMappingURL=1759325465579-FtsFieldInPost.js.map