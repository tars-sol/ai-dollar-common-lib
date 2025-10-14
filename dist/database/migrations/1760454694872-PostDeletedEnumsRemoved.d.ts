import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PostDeletedEnumsRemoved1760454694872 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
