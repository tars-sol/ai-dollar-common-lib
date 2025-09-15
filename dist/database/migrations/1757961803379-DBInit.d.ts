import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DBInit1757961803379 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
