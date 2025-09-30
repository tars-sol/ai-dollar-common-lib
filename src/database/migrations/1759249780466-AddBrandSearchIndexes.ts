import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBrandSearchIndexes1759249780466 implements MigrationInterface {
  public readonly transaction = false;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_brands_fts
      ON "brands" USING GIN (fts)
    `);

    await queryRunner.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_brands_name_trgm
      ON "brands" USING GIN (lower(name) gin_trgm_ops)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_brands_name_trgm`);
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_brands_fts`);
  }
}
