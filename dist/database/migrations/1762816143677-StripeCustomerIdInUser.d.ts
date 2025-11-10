import { MigrationInterface, QueryRunner } from "typeorm";
export declare class StripeCustomerIdInUser1762816143677 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
