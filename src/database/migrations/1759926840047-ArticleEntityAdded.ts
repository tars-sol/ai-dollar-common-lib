import { MigrationInterface, QueryRunner } from "typeorm";

export class ArticleEntityAdded1759926840047 implements MigrationInterface {
    name = 'ArticleEntityAdded1759926840047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."articles_status_enum" AS ENUM('DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED')`);
        await queryRunner.query(`CREATE TYPE "public"."articles_accesstype_enum" AS ENUM('PUBLIC', 'SUBSCRIBER')`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postId" uuid NOT NULL, "title" character varying(255) NOT NULL, "status" "public"."articles_status_enum" NOT NULL DEFAULT 'DRAFT', "accessType" "public"."articles_accesstype_enum" NOT NULL DEFAULT 'PUBLIC', "language" character varying(5) NOT NULL DEFAULT 'en', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "REL_1740efc36565f826b62aa0d5dd" UNIQUE ("postId"), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1740efc36565f826b62aa0d5dd" ON "articles" ("postId") `);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TYPE "public"."posts_type_enum" RENAME TO "posts_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."posts_type_enum" AS ENUM('TEXT', 'MEDIA', 'POLL', 'FILE', 'ARTICLE')`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "type" TYPE "public"."posts_type_enum" USING "type"::"text"::"public"."posts_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."posts_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."posts_deleted_type_enum" RENAME TO "posts_deleted_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."posts_deleted_type_enum" AS ENUM('TEXT', 'MEDIA', 'POLL', 'FILE', 'ARTICLE')`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ALTER COLUMN "type" TYPE "public"."posts_deleted_type_enum" USING "type"::"text"::"public"."posts_deleted_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."posts_deleted_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_1740efc36565f826b62aa0d5dd2" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_1740efc36565f826b62aa0d5dd2"`);
        await queryRunner.query(`CREATE TYPE "public"."posts_deleted_type_enum_old" AS ENUM('TEXT', 'MEDIA', 'POLL', 'FILE')`);
        await queryRunner.query(`ALTER TABLE "posts_deleted" ALTER COLUMN "type" TYPE "public"."posts_deleted_type_enum_old" USING "type"::"text"::"public"."posts_deleted_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."posts_deleted_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."posts_deleted_type_enum_old" RENAME TO "posts_deleted_type_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."posts_type_enum_old" AS ENUM('TEXT', 'MEDIA', 'POLL', 'FILE')`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "type" TYPE "public"."posts_type_enum_old" USING "type"::"text"::"public"."posts_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."posts_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."posts_type_enum_old" RENAME TO "posts_type_enum"`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1740efc36565f826b62aa0d5dd"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TYPE "public"."articles_accesstype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."articles_status_enum"`);
    }

}
