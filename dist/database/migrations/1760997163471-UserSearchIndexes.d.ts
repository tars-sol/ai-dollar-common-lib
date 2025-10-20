import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UserSearchIndexes1760997163471 implements MigrationInterface {
    readonly transaction = false;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
