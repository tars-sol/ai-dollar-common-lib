"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTypeormMetadataIfMissing1700000000000 = void 0;
class CreateTypeormMetadataIfMissing1700000000000 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "typeorm_metadata" (
        "type" varchar,
        "database" varchar,
        "schema" varchar,
        "table" varchar,
        "name" varchar,
        "value" text
      );
    `);
    }
    async down() {
        // usually keep; removing may break future diffs
    }
}
exports.CreateTypeormMetadataIfMissing1700000000000 = CreateTypeormMetadataIfMissing1700000000000;
//# sourceMappingURL=fix-migration.js.map