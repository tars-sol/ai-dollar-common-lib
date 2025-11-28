"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBaseIndexPost1764256950769 = void 0;
class TextBaseIndexPost1764256950769 {
    constructor() {
        this.name = 'TextBaseIndexPost1764256950769';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" ADD "ftsFull" tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english_unaccent', coalesce("hashtagsText", '')), 'A') ||
    setweight(to_tsvector('english_unaccent', coalesce("caption", '')), 'B')
  ) STORED`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES ($1, $2, $3, $4, $5, $6)`, ["aidollar", "public", "posts", "GENERATED_COLUMN", "ftsFull", "\n    setweight(to_tsvector('english_unaccent', coalesce(\"hashtagsText\", '')), 'A') ||\n    setweight(to_tsvector('english_unaccent', coalesce(\"caption\", '')), 'B')\n  "]);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "database" = $3 AND "schema" = $4 AND "table" = $5`, ["GENERATED_COLUMN", "ftsFull", "aidollar", "public", "posts"]);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "ftsFull"`);
    }
}
exports.TextBaseIndexPost1764256950769 = TextBaseIndexPost1764256950769;
//# sourceMappingURL=1764256950769-TextBaseIndexPost.js.map