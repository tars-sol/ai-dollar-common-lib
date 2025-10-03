"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeleted = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
let PostDeleted = class PostDeleted {
};
exports.PostDeleted = PostDeleted;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostDeleted.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], PostDeleted.prototype, "originalPostId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], PostDeleted.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PostDeleted.prototype, "caption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PostDeleted.prototype, "hashtagsText", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: post_entity_1.AccessType }),
    __metadata("design:type", String)
], PostDeleted.prototype, "accessType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: post_entity_1.PostType }),
    __metadata("design:type", String)
], PostDeleted.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PostDeleted.prototype, "inPortfolio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PostDeleted.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PostDeleted.prototype, "dislikeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PostDeleted.prototype, "commentCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], PostDeleted.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], PostDeleted.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], PostDeleted.prototype, "deletedAt", void 0);
exports.PostDeleted = PostDeleted = __decorate([
    (0, typeorm_1.Entity)('posts_deleted')
], PostDeleted);
//# sourceMappingURL=post_deleted.entity.js.map