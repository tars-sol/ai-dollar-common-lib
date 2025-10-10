import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UsernameCampaignRulesUpdate1760094312875 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
