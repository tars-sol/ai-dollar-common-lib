import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PostDeleteTrigger1760454761781 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
