import { MigrationInterface, QueryRunner } from "typeorm";

export class MentionsFixes1760548822704 implements MigrationInterface {
  name = 'MentionsFixes1760548822704';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS "uniq_mentions_post_user"
      ON "mentions" ("mentionedUserId","postId")
      WHERE "postId" IS NOT NULL AND "targetType" = 'POST';
    `);

    await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS "uniq_mentions_comment_user"
      ON "mentions" ("mentionedUserId","commentId")
      WHERE "commentId" IS NOT NULL AND "targetType" = 'COMMENT';
    `);

    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1
          FROM pg_constraint
          WHERE conname = 'FK_mentions_created_by'
        ) THEN
          ALTER TABLE "mentions"
          ADD CONSTRAINT "FK_mentions_created_by"
          FOREIGN KEY ("createdByUserId")
          REFERENCES "users"("id")
          ON DELETE SET NULL
          ON UPDATE NO ACTION;
        END IF;
      END
      $$;
    `);

    await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
    await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
    await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1
          FROM pg_constraint
          WHERE conname = 'FK_mentions_created_by'
        ) THEN
          ALTER TABLE "mentions" DROP CONSTRAINT "FK_mentions_created_by";
        END IF;
      END
      $$;
    `);

    await queryRunner.query(`DROP INDEX IF EXISTS "uniq_mentions_comment_user"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "uniq_mentions_post_user"`);

    await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
    await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
    await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
  }
}
