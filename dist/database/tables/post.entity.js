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
exports.Post = exports.FileType = exports.AccessType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var AccessType;
(function (AccessType) {
    AccessType["PUBLIC"] = "PUBLIC";
    AccessType["SUBSCRIBER"] = "SUBSCRIBER";
    AccessType["PAID"] = "PAID";
})(AccessType || (exports.AccessType = AccessType = {}));
var FileType;
(function (FileType) {
    FileType["IMAGE"] = "IMAGE";
    FileType["VIDEO"] = "VIDEO";
    FileType["CODE"] = "CODE";
    FileType["OTHER"] = "OTHER";
})(FileType || (exports.FileType = FileType = {}));
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Post.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "caption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: AccessType, default: AccessType.PUBLIC }),
    __metadata("design:type", String)
], Post.prototype, "accessType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Post.prototype, "priceInCents", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "s3Key", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: FileType }),
    __metadata("design:type", String)
], Post.prototype, "fileType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "originalFileName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)('posts')
], Post);
//# sourceMappingURL=post.entity.js.map