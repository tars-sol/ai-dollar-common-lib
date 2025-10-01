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
exports.Post = exports.PostType = exports.AccessType = void 0;
const typeorm_1 = require("typeorm");
const post_media_entity_1 = require("./post_media.entity");
const post_poll_entity_1 = require("./post_poll.entity");
const post_file_entity_1 = require("./post_file.entity");
const post_comment_entity_1 = require("./post_comment.entity");
const post_reaction_entity_1 = require("./post_reaction.entity");
const profile_entity_1 = require("./profile.entity");
var AccessType;
(function (AccessType) {
    AccessType["PUBLIC"] = "PUBLIC";
    AccessType["SUBSCRIBER"] = "SUBSCRIBER";
    // PAID = 'PAID',
})(AccessType || (exports.AccessType = AccessType = {}));
var PostType;
(function (PostType) {
    PostType["TEXT"] = "TEXT";
    PostType["MEDIA"] = "MEDIA";
    PostType["POLL"] = "POLL";
    PostType["FILE"] = "FILE";
})(PostType || (exports.PostType = PostType = {}));
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'profileId' }),
    __metadata("design:type", profile_entity_1.Profile)
], Post.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "caption", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "hashtagsText", void 0);
__decorate([
    (0, typeorm_1.Index)('idx_posts_fts', { synchronize: false }),
    (0, typeorm_1.Column)({
        type: 'tsvector',
        asExpression: `
      setweight(to_tsvector('english_unaccent', coalesce("hashtagsText", '')), 'A')
    `,
        generatedType: 'STORED',
        nullable: true,
        select: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "fts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: AccessType, default: AccessType.PUBLIC }),
    __metadata("design:type", String)
], Post.prototype, "accessType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: PostType }),
    __metadata("design:type", String)
], Post.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "inPortfolio", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_media_entity_1.PostMedia, (m) => m.post),
    __metadata("design:type", post_media_entity_1.PostMedia)
], Post.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_file_entity_1.PostFile, (m) => m.post),
    __metadata("design:type", post_file_entity_1.PostFile)
], Post.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_poll_entity_1.PostPoll, (p) => p.post),
    __metadata("design:type", post_poll_entity_1.PostPoll)
], Post.prototype, "poll", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "dislikeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "commentCount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_comment_entity_1.PostComment, (c) => c.post),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_reaction_entity_1.PostReactions, (l) => l.post),
    __metadata("design:type", Array)
], Post.prototype, "reactions", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)('posts')
], Post);
//# sourceMappingURL=post.entity.js.map