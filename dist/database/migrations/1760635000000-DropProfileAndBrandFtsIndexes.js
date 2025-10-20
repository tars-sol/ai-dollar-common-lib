"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropProfileAndBrandSearchIndexes1760635000000 = void 0;
class DropProfileAndBrandSearchIndexes1760635000000 {
    constructor() {
        this.transaction = false;
    }
    async up(q) {
        await q.query(`DROP INDEX CONCURRENTLY idx_profiles_fts`);
        await q.query(`DROP INDEX CONCURRENTLY idx_profiles_username_trgm`);
        await q.query(`DROP INDEX CONCURRENTLY idx_profiles_name_trgm`);
        // brands
        await q.query(`DROP INDEX CONCURRENTLY idx_brands_fts`);
        await q.query(`DROP INDEX CONCURRENTLY idx_brands_name_trgm`);
    }
    async down(q) {
        await q.query(`CREATE INDEX CONCURRENTLY idx_profiles_fts ON "profiles" USING GIN (fts)`);
        await q.query(`CREATE INDEX CONCURRENTLY idx_profiles_username_trgm ON "profiles" USING GIN (lower(username) gin_trgm_ops)`);
        await q.query(`CREATE INDEX CONCURRENTLY idx_profiles_name_trgm     ON "profiles" USING GIN (lower(name) gin_trgm_ops)`);
        await q.query(`CREATE INDEX CONCURRENTLY idx_brands_fts ON "brands" USING GIN (fts)`);
        await q.query(`CREATE INDEX CONCURRENTLY idx_brands_name_trgm ON "brands" USING GIN (lower(name) gin_trgm_ops)`);
    }
}
exports.DropProfileAndBrandSearchIndexes1760635000000 = DropProfileAndBrandSearchIndexes1760635000000;
//# sourceMappingURL=1760635000000-DropProfileAndBrandFtsIndexes.js.map