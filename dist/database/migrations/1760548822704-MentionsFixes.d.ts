import { MigrationInterface, QueryRunner } from "typeorm";
export declare class MentionsFixes1760548822704 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
