import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTypeormMetadataIfMissing1700000000000 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
