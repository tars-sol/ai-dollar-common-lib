"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaUpdatesForProfileMetrics1763470656443 = void 0;
class SchemaUpdatesForProfileMetrics1763470656443 {
    constructor() {
        this.name = 'SchemaUpdatesForProfileMetrics1763470656443';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "profile_daily_metrics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "profileId" uuid NOT NULL, "date" date NOT NULL, "earningsCents" bigint NOT NULL DEFAULT '0', "viewsCount" bigint NOT NULL DEFAULT '0', "followersTotal" bigint NOT NULL DEFAULT '0', "followersDelta" bigint NOT NULL DEFAULT '0', "subsTotal" bigint NOT NULL DEFAULT '0', "subsDelta" bigint NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "u_profile_daily_metrics_profile_date" UNIQUE ("profileId", "date"), CONSTRAINT "PK_b162d053cea96d0795fca20a4f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_47653a3b768d9a5f224c137186" ON "profile_daily_metrics" ("profileId", "date") `);
        await queryRunner.query(`CREATE TABLE "post_daily_views" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postId" uuid NOT NULL, "creatorId" uuid NOT NULL, "date" date NOT NULL, "views" bigint NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "u_post_daily_views_post_date" UNIQUE ("postId", "date"), CONSTRAINT "PK_6b53aae3ace191000a59450867f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ccb7398f3c1592edc39a8539ec" ON "post_daily_views" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c4b93cff140cf45e1ec1925e89" ON "post_daily_views" ("creatorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f9bfdd29d7aa0c9069b66f01d4" ON "post_daily_views" ("creatorId", "date") `);
        await queryRunner.query(`ALTER TABLE "posts" ADD "viewCount" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
        await queryRunner.query(`ALTER TABLE "post_daily_views" ADD CONSTRAINT "FK_ccb7398f3c1592edc39a8539ec9" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_daily_views" ADD CONSTRAINT "FK_c4b93cff140cf45e1ec1925e892" FOREIGN KEY ("creatorId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post_daily_views" DROP CONSTRAINT "FK_c4b93cff140cf45e1ec1925e892"`);
        await queryRunner.query(`ALTER TABLE "post_daily_views" DROP CONSTRAINT "FK_ccb7398f3c1592edc39a8539ec9"`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "viewCount"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9bfdd29d7aa0c9069b66f01d4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c4b93cff140cf45e1ec1925e89"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ccb7398f3c1592edc39a8539ec"`);
        await queryRunner.query(`DROP TABLE "post_daily_views"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_47653a3b768d9a5f224c137186"`);
        await queryRunner.query(`DROP TABLE "profile_daily_metrics"`);
    }
}
exports.SchemaUpdatesForProfileMetrics1763470656443 = SchemaUpdatesForProfileMetrics1763470656443;
//# sourceMappingURL=1763470656443-SchemaUpdatesForProfileMetrics.js.map