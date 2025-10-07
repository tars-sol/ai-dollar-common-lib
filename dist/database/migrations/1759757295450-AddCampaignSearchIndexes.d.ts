import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddCampaignSearchIndexes1759757295450 implements MigrationInterface {
    readonly transaction = false;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
