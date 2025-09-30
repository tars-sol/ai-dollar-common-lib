"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBrandSearchIndexes1759249780466 = void 0;
class AddBrandSearchIndexes1759249780466 {
    constructor() {
        this.transaction = false;
    }
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_brands_fts
      ON "brands" USING GIN (fts)
    `);
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_brands_name_trgm
      ON "brands" USING GIN (lower(name) gin_trgm_ops)
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_brands_name_trgm`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_brands_fts`);
    }
}
exports.AddBrandSearchIndexes1759249780466 = AddBrandSearchIndexes1759249780466;
//# sourceMappingURL=1759249780466-AddBrandSearchIndexes.js.map