import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PostDeletedUpdatesForTypesense1760451668674 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
