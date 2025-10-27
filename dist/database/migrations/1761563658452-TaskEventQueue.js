"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEventQueue1761563658452 = void 0;
class TaskEventQueue1761563658452 {
    constructor() {
        this.name = 'TaskEventQueue1761563658452';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "event_queue_task" ("id" BIGSERIAL NOT NULL, "routingKey" text NOT NULL, "correlationId" text, "payload" jsonb NOT NULL, "occurredAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "publishedAt" TIMESTAMP WITH TIME ZONE, "publishAttempts" integer NOT NULL DEFAULT '0', "nextAttemptAt" TIMESTAMP WITH TIME ZONE, "isSuccessful" boolean NOT NULL DEFAULT false, "failureReason" text, "successfulAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_da2c46fb1a6b6637a2c218ff8de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b592e481c4814a8b8d4639437a" ON "event_queue_task" ("routingKey") `);
        await queryRunner.query(`CREATE INDEX "IDX_b9b2080bd458f3ce089e6d82b1" ON "event_queue_task" ("correlationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_da443208499dcfc3ef1dc39cd2" ON "event_queue_task" ("publishedAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_e0e61aea4ee358098ec8ae0282" ON "event_queue_task" ("nextAttemptAt") `);
        await queryRunner.query(`CREATE INDEX "IDX_e3040ad68dbd2678f3e746be51" ON "event_queue_task" ("successfulAt") `);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'::text[]`);
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"version":"1.0","blocks":[]}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "contentJson" SET DEFAULT '{"blocks": [], "version": "1.0"}'`);
        await queryRunner.query(`ALTER TABLE "post_poll" ALTER COLUMN "votedProfilePics" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "brands" ALTER COLUMN "tags" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e3040ad68dbd2678f3e746be51"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e0e61aea4ee358098ec8ae0282"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_da443208499dcfc3ef1dc39cd2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b9b2080bd458f3ce089e6d82b1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b592e481c4814a8b8d4639437a"`);
        await queryRunner.query(`DROP TABLE "event_queue_task"`);
    }
}
exports.TaskEventQueue1761563658452 = TaskEventQueue1761563658452;
//# sourceMappingURL=1761563658452-TaskEventQueue.js.map