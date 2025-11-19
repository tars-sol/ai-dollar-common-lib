import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SchemaUpdatesForProfileMetrics1763470656443 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
