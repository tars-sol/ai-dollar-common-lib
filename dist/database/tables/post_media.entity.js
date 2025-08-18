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
exports.PostMedia = exports.MediaType = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
var MediaType;
(function (MediaType) {
    MediaType["IMAGE"] = "IMAGE";
    MediaType["VIDEO"] = "VIDEO";
    MediaType["GIF"] = "GIF";
})(MediaType || (exports.MediaType = MediaType = {}));
let PostMedia = class PostMedia {
};
exports.PostMedia = PostMedia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostMedia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_entity_1.Post, (post) => post.media, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", post_entity_1.Post)
], PostMedia.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostMedia.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: MediaType }),
    __metadata("design:type", String)
], PostMedia.prototype, "mediaType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostMedia.prototype, "s3Key", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostMedia.prototype, "originalFileName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], PostMedia.prototype, "mimeType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PostMedia.prototype, "durationSec", void 0);
exports.PostMedia = PostMedia = __decorate([
    (0, typeorm_1.Entity)('post_media')
], PostMedia);
//# sourceMappingURL=post_media.entity.js.map