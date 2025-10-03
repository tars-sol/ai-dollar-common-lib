import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PostDeletedTable1759491136791 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
