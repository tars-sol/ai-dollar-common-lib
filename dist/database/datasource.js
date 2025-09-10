"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const host = process.env.DATABASE_HOST ?? 'localhost';
const port = parseInt(process.env.DATABASE_PORT ?? '5432', 10);
const username = process.env.DATABASE_USERNAME ?? 'root';
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;
const schema = process.env.DATABASE_SCHEMA;
exports.Database = new typeorm_1.DataSource({
    type: 'postgres',
    host,
    port,
    username,
    password,
    database,
    schema,
    synchronize: false,
    migrationsRun: false,
    logging: false,
    entities: [
        __dirname + '/tables/**.entity.{js,ts}',
        __dirname + '/cache/**.entity.{js,ts}',
        __dirname + '/types/**.view.{js,ts}',
    ],
    migrations: [__dirname + '/migrations/*-*.{js,ts}'],
});
//# sourceMappingURL=datasource.js.map