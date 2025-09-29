import { MigrationInterface, QueryRunner } from 'typeorm';

export class BootstrapTypeormMetadataAndFtsPrereqs1759151000000 implements MigrationInterface {
  public async up(q: QueryRunner): Promise<void> {
    // Ensure TypeORM can record GENERATED_COLUMN metadata
    await q.query(`
      CREATE TABLE IF NOT EXISTS "typeorm_metadata" (
        "type" varchar,
        "database" varchar,
        "schema" varchar,
        "table" varchar,
        "name" varchar,
        "value" text
      );
    `);

    // Required extensions
    await q.query(`CREATE EXTENSION IF NOT EXISTS unaccent`);
    await q.query(`CREATE EXTENSION IF NOT EXISTS pg_trgm`);

    // Helpful text search configurations (idempotent)
    await q.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = 'simple_unaccent') THEN
          CREATE TEXT SEARCH CONFIGURATION simple_unaccent (COPY = simple);
          ALTER TEXT SEARCH CONFIGURATION simple_unaccent
            ALTER MAPPING FOR hword, hword_part, word WITH unaccent, simple;
        END IF;
      END$$;
    `);

    await q.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = 'english_unaccent') THEN
          CREATE TEXT SEARCH CONFIGURATION english_unaccent (COPY = english);
          ALTER TEXT SEARCH CONFIGURATION english_unaccent
            ALTER MAPPING FOR hword, hword_part, word WITH unaccent, english_stem;
        END IF;
      END$$;
    `);
  }

  public async down(): Promise<void> {
    // no-op: keep extensions/configs and metadata table
  }
}
