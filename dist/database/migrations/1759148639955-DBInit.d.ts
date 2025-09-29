import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DBInit1759148639955 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
