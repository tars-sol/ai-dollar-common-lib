import { MigrationInterface, QueryRunner } from "typeorm";
export declare class EventQueueUserUpdates1762645519532 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
