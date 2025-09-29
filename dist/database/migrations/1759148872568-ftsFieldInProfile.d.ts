import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FtsFieldInProfile1759148872568 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
