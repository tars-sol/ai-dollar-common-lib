import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PostDeletedSchemaUpdatesForQdrant1767966861624 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
