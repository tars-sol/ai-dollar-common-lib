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
exports.Article = exports.ArticleStatus = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const post_entity_2 = require("./post.entity");
var ArticleStatus;
(function (ArticleStatus) {
    ArticleStatus["DRAFT"] = "DRAFT";
    ArticleStatus["REVIEW"] = "REVIEW";
    ArticleStatus["PUBLISHED"] = "PUBLISHED";
    ArticleStatus["ARCHIVED"] = "ARCHIVED";
})(ArticleStatus || (exports.ArticleStatus = ArticleStatus = {}));
let Article = class Article {
};
exports.Article = Article;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Article.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_entity_1.Post, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'postId' }),
    __metadata("design:type", post_entity_1.Post)
], Article.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Article.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ArticleStatus, default: ArticleStatus.DRAFT }),
    __metadata("design:type", String)
], Article.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: post_entity_2.AccessType, default: post_entity_2.AccessType.PUBLIC }),
    __metadata("design:type", String)
], Article.prototype, "accessType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, default: 'en' }),
    __metadata("design:type", String)
], Article.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Article.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Article.prototype, "updatedAt", void 0);
exports.Article = Article = __decorate([
    (0, typeorm_1.Entity)('articles')
], Article);
//# sourceMappingURL=article.entity.js.map