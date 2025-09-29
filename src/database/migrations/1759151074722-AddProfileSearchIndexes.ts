import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProfileSearchIndexes1759152000000 implements MigrationInterface {
  public readonly transaction = false;

  public async up(q: QueryRunner): Promise<void> {
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

  public async down(q: QueryRunner): Promise<void> {
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_name_trgm`);
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_username_trgm`);
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_fts`);
  }
}