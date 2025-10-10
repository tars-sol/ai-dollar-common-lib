import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ContentJsonTypeUpdate1760013906282 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
