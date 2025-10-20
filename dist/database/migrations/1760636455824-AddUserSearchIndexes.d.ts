import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserSearchIndexes1760636455824 implements MigrationInterface {
    readonly transaction = false;
    up(q: QueryRunner): Promise<void>;
    down(q: QueryRunner): Promise<void>;
}
