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
exports.Mention = exports.MentionTargetType = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const post_comment_entity_1 = require("./post_comment.entity");
const user_entity_1 = require("./user.entity");
var MentionTargetType;
(function (MentionTargetType) {
    MentionTargetType["POST"] = "POST";
    MentionTargetType["COMMENT"] = "COMMENT";
})(MentionTargetType || (exports.MentionTargetType = MentionTargetType = {}));
let Mention = class Mention {
};
exports.Mention = Mention;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Mention.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: MentionTargetType }),
    __metadata("design:type", String)
], Mention.prototype, "targetType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], Mention.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_entity_1.Post, { onDelete: 'CASCADE', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'postId' }),
    __metadata("design:type", Object)
], Mention.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], Mention.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_comment_entity_1.PostComment, { onDelete: 'CASCADE', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'commentId' }),
    __metadata("design:type", Object)
], Mention.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mention.prototype, "mentionedUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'mentionedUserId' }),
    __metadata("design:type", user_entity_1.User)
], Mention.prototype, "mentionedUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], Mention.prototype, "createdByUserId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Mention.prototype, "createdAt", void 0);
exports.Mention = Mention = __decorate([
    (0, typeorm_1.Entity)('mentions'),
    (0, typeorm_1.Index)('idx_mentions_post', ['targetType', 'postId']),
    (0, typeorm_1.Index)('idx_mentions_comment', ['targetType', 'commentId']),
    (0, typeorm_1.Index)('idx_mentions_user', ['mentionedUserId'])
], Mention);
//# sourceMappingURL=mention.entity.js.map