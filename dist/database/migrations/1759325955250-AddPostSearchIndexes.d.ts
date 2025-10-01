import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddPostSearchIndexes1759325000000 implements MigrationInterface {
    readonly transaction = false;
    up(q: QueryRunner): Promise<void>;
    down(q: QueryRunner): Promise<void>;
}
