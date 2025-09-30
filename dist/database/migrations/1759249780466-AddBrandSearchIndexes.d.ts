import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddBrandSearchIndexes1759249780466 implements MigrationInterface {
    readonly transaction = false;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
