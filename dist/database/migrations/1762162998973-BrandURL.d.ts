import { MigrationInterface, QueryRunner } from "typeorm";
export declare class BrandURL1762162998973 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
