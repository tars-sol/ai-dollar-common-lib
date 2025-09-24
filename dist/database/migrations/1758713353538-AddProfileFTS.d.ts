import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddProfileFTS1758713353538 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
