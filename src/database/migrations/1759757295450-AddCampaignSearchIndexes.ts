import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCampaignSearchIndexes1759757295450 implements MigrationInterface {
  public readonly transaction = false;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_campaigns_fts
      ON "campaigns" USING GIN (fts)
    `);

    await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_campaigns_name_trgm
      ON "campaigns" USING GIN (lower(name) gin_trgm_ops)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_campaigns_name_trgm`);
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_campaigns_fts`);
  }
}
