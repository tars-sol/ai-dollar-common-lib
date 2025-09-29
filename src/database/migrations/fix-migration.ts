import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTypeormMetadataIfMissing1700000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "typeorm_metadata" (
        "type" varchar,
        "database" varchar,
        "schema" varchar,
        "table" varchar,
        "name" varchar,
        "value" text
      );
    `);
  }
  public async down(): Promise<void> {
    // usually keep; removing may break future diffs
  }
}