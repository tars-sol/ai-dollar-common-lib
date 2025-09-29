import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class BootstrapTypeormMetadataAndFtsPrereqs1759151000000 implements MigrationInterface {
    up(q: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
