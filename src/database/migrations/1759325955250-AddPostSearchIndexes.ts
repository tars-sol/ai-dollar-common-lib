import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPostSearchIndexes1759325955250 implements MigrationInterface {
  public readonly transaction = false;

  public async up(q: QueryRunner): Promise<void> {
    await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_posts_fts
      ON "posts" USING GIN (fts)
    `);

    await q.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_posts_hashtags_trgm
      ON "posts" USING GIN (lower("hashtagsText") gin_trgm_ops)
    `);
  }

  public async down(q: QueryRunner): Promise<void> {
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_posts_hashtags_trgm`);
    await q.query(`DROP INDEX CONCURRENTLY IF EXISTS idx_posts_fts`);
  }
}
