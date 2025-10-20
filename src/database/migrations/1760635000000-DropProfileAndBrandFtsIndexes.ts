import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropProfileAndBrandSearchIndexes1760635000000 implements MigrationInterface {
  public readonly transaction = false;

  public async up(q: QueryRunner): Promise<void> {
    await q.query(`DROP INDEX CONCURRENTLY idx_profiles_fts`);
    await q.query(`DROP INDEX CONCURRENTLY idx_profiles_username_trgm`);
    await q.query(`DROP INDEX CONCURRENTLY idx_profiles_name_trgm`);

    // brands
    await q.query(`DROP INDEX CONCURRENTLY idx_brands_fts`);
    await q.query(`DROP INDEX CONCURRENTLY idx_brands_name_trgm`);
  }

  public async down(q: QueryRunner): Promise<void> {
    await q.query(`CREATE INDEX CONCURRENTLY idx_profiles_fts ON "profiles" USING GIN (fts)`);
    await q.query(`CREATE INDEX CONCURRENTLY idx_profiles_username_trgm ON "profiles" USING GIN (lower(username) gin_trgm_ops)`);
    await q.query(`CREATE INDEX CONCURRENTLY idx_profiles_name_trgm     ON "profiles" USING GIN (lower(name) gin_trgm_ops)`);

    await q.query(`CREATE INDEX CONCURRENTLY idx_brands_fts ON "brands" USING GIN (fts)`);
    await q.query(`CREATE INDEX CONCURRENTLY idx_brands_name_trgm ON "brands" USING GIN (lower(name) gin_trgm_ops)`);
  }
}
