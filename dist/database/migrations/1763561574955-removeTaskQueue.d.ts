import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemoveTaskQueue1763561574955 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
