import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserSearchIndexes1760636455824 implements MigrationInterface {
  public readonly transaction = false;

  public async up(q: QueryRunner): Promise<void> {
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

  public async down(q: QueryRunner): Promise<void> {
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS uq_users_username_ci`);
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_name_trgm`);
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_username_trgm`);
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_users_fts`);
  }
}
