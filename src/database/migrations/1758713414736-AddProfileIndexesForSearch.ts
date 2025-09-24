import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfileIndexesForSearch1758713414736 implements MigrationInterface {
  public readonly transaction = false;

  public async up(queryRunner: QueryRunner): Promise<void> {
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS uq_profiles_username_lower`);
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_name_trgm`);
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_username_trgm`);
    await queryRunner.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_profiles_fts`);
  }
}
