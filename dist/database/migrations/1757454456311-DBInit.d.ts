import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DBInit1757454456311 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
