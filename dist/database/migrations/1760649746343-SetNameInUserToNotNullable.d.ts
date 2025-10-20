import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetNameInUserToNotNullable1760649746343 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
