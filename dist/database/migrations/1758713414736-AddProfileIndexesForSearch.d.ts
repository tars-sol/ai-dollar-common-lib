import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddProfileIndexesForSearch1758713414736 implements MigrationInterface {
    readonly transaction = false;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
