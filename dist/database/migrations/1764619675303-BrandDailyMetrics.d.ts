import { MigrationInterface, QueryRunner } from "typeorm";
export declare class BrandDailyMetrics1764619675303 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
