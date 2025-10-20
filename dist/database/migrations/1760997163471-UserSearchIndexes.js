"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSearchIndexes1760997163471 = void 0;
class UserSearchIndexes1760997163471 {
    constructor() {
        this.transaction = false;
    }
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_fts
      ON "users" USING GIN (fts)
    `);
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_username_trgm
      ON "users" USING GIN (lower(username) gin_trgm_ops)
    `);
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_name_trgm
      ON "users" USING GIN (lower(name) gin_trgm_ops)
    `);
        await queryRunner.query(`
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
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS uq_users_username_ci`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_name_trgm`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_username_trgm`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_fts`);
    }
}
exports.UserSearchIndexes1760997163471 = UserSearchIndexes1760997163471;
//# sourceMappingURL=1760997163471-UserSearchIndexes.js.map