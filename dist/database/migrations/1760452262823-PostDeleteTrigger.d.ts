import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class PostDeleteTrigger1760452262823 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
