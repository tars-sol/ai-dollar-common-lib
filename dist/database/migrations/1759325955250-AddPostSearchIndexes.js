"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPostSearchIndexes1759325000000 = void 0;
class AddPostSearchIndexes1759325000000 {
    constructor() {
        this.transaction = false;
    }
    async up(q) {
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_posts_fts
      ON "posts" USING GIN (fts)
    `);
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_posts_hashtags_trgm
      ON "posts" USING GIN (lower("hashtagsText") gin_trgm_ops)
    `);
    }
    async down(q) {
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_posts_hashtags_trgm`);
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_posts_fts`);
    }
}
exports.AddPostSearchIndexes1759325000000 = AddPostSearchIndexes1759325000000;
//# sourceMappingURL=1759325955250-AddPostSearchIndexes.js.map