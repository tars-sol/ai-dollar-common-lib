"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProfileIndexesForSearch1758713414736 = void 0;
class AddProfileIndexesForSearch1758713414736 {
    constructor() {
        this.transaction = false;
    }
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_fts
      ON "profiles" USING GIN (fts)
    `);
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_username_trgm
      ON "profiles" USING GIN (lower(username) gin_trgm_ops)
    `);
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_profiles_name_trgm
      ON "profiles" USING GIN (lower(name) gin_trgm_ops)
    `);
        await queryRunner.query(`
      CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS uq_profiles_username_lower
      ON "profiles" (lower(username))
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS uq_profiles_username_lower`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_name_trgm`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_username_trgm`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_fts`);
    }
}
exports.AddProfileIndexesForSearch1758713414736 = AddProfileIndexesForSearch1758713414736;
//# sourceMappingURL=1758713414736-AddProfileIndexesForSearch.js.map