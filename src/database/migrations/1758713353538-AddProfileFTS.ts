import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfileFTS1758713353538 implements MigrationInterface {
  name = 'AddProfileFTS1758713353538';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS unaccent`);
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS pg_trgm`);

    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = 'simple_unaccent') THEN
          CREATE TEXT SEARCH CONFIGURATION simple_unaccent ( COPY = simple );
          ALTER TEXT SEARCH CONFIGURATION simple_unaccent
            ALTER MAPPING FOR hword, hword_part, word WITH unaccent, simple;
        END IF;
      END$$;
    `);

    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = 'english_unaccent') THEN
          CREATE TEXT SEARCH CONFIGURATION english_unaccent ( COPY = english );
          ALTER TEXT SEARCH CONFIGURATION english_unaccent
            ALTER MAPPING FOR hword, hword_part, word WITH unaccent, english_stem;
        END IF;
      END$$;
    `);

    await queryRunner.query(`
      ALTER TABLE "profiles"
      ADD COLUMN IF NOT EXISTS fts tsvector
      GENERATED ALWAYS AS (
        setweight(to_tsvector('simple_unaccent',  coalesce(username, '')), 'A') ||
        setweight(to_tsvector('english_unaccent', coalesce(name,     '')), 'B')
      ) STORED
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN IF EXISTS fts`);
  }
}
