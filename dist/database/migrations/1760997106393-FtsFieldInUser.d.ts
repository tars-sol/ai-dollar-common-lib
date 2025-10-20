import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FtsFieldInUser1760997106393 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
