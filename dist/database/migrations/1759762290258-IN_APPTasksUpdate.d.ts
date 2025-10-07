import { MigrationInterface, QueryRunner } from "typeorm";
export declare class INAPPTasksUpdate1759762290258 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
