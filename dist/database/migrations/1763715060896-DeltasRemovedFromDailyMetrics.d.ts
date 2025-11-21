import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DeltasRemovedFromDailyMetrics1763715060896 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
