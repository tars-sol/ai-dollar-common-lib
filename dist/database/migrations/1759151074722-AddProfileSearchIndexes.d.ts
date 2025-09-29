import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddProfileSearchIndexes1759152000000 implements MigrationInterface {
    readonly transaction = false;
    up(q: QueryRunner): Promise<void>;
    down(q: QueryRunner): Promise<void>;
}
