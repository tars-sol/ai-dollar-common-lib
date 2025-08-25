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
exports.PostLike = void 0;
// entities/post-like.entity.ts
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const profile_entity_1 = require("./profile.entity");
let PostLike = class PostLike {
};
exports.PostLike = PostLike;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostLike.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_entity_1.Post, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'postId' }) // <-- make it explicit
    ,
    __metadata("design:type", post_entity_1.Post)
], PostLike.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ name: 'postId', type: 'uuid' }) // <-- same column name
    ,
    __metadata("design:type", String)
], PostLike.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'profileId' }),
    __metadata("design:type", profile_entity_1.Profile)
], PostLike.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ name: 'profileId', type: 'uuid' }),
    __metadata("design:type", String)
], PostLike.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PostLike.prototype, "createdAt", void 0);
exports.PostLike = PostLike = __decorate([
    (0, typeorm_1.Entity)('post_likes'),
    (0, typeorm_1.Unique)(['postId', 'profileId'])
], PostLike);
//# sourceMappingURL=post_like.entity.js.map