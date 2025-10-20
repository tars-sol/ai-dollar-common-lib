"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserSearchIndexes1760636455824 = void 0;
class AddUserSearchIndexes1760636455824 {
    constructor() {
        this.transaction = false;
    }
    async up(q) {
        // FTS
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_fts
      ON "users" USING GIN (fts)
    `);
        // Fuzzy (trigram)
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_username_trgm
      ON "users" USING GIN (lower(username) gin_trgm_ops)
    `);
        await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_name_trgm
      ON "users" USING GIN (lower(name) gin_trgm_ops)
    `);
        await q.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_indexes WHERE indexname = 'uq_users_username_ci'
        ) THEN
          CREATE UNIQUE INDEX uq_users_username_ci
          ON "users" (lower(username));
        END IF;
      END
      $$;
    `);
    }
    async down(q) {
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS uq_users_username_ci`);
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_name_trgm`);
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_username_trgm`);
        await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_fts`);
    }
}
exports.AddUserSearchIndexes1760636455824 = AddUserSearchIndexes1760636455824;
//# sourceMappingURL=1760636455824-AddUserSearchIndexes.js.map