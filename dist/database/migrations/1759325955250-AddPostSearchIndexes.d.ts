import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddPostSearchIndexes1759325955250 implements MigrationInterface {
    readonly transaction = false;
    up(q: QueryRunner): Promise<void>;
    down(q: QueryRunner): Promise<void>;
}
