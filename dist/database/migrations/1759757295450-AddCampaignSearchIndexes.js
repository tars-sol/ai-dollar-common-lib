"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCampaignSearchIndexes1759757295450 = void 0;
class AddCampaignSearchIndexes1759757295450 {
    constructor() {
        this.transaction = false;
    }
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_campaigns_fts
      ON "campaigns" USING GIN (fts)
    `);
        await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_campaigns_name_trgm
      ON "campaigns" USING GIN (lower(name) gin_trgm_ops)
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_campaigns_name_trgm`);
        await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_campaigns_fts`);
    }
}
exports.AddCampaignSearchIndexes1759757295450 = AddCampaignSearchIndexes1759757295450;
//# sourceMappingURL=1759757295450-AddCampaignSearchIndexes.js.map