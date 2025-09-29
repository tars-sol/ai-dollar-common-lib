import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FtsFieldInProfile1759151074720 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
