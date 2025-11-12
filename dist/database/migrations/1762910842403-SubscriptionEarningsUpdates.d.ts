import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SubscriptionEarningsUpdates1762910842403 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
