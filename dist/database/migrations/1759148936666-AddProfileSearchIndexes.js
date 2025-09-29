"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProfileSearchIndexes1759152000000 = void 0;
class AddProfileSearchIndexes1759152000000 {
    constructor() {
        this.transaction = false;
    }
    async up(q) {
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_fts
      ON "profiles" USING GIN (fts)
    `);
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_username_trgm
      ON "profiles" USING GIN (lower(username) gin_trgm_ops)
    `);
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_name_trgm
      ON "profiles" USING GIN (lower(name) gin_trgm_ops)
    `);
    }
    async down(q) {
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_name_trgm`);
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_username_trgm`);
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_fts`);
    }
}
exports.AddProfileSearchIndexes1759152000000 = AddProfileSearchIndexes1759152000000;
//# sourceMappingURL=1759148936666-AddProfileSearchIndexes.js.map