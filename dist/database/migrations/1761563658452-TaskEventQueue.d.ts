import { MigrationInterface, QueryRunner } from "typeorm";
export declare class TaskEventQueue1761563658452 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
