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
exports.PostFile = exports.FileType = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
var FileType;
(function (FileType) {
    FileType["PDF"] = "PDF";
    FileType["CSV"] = "CSV";
    FileType["ZIP"] = "ZIP";
    FileType["JSON"] = "JSON";
    FileType["TXT"] = "TXT";
})(FileType || (exports.FileType = FileType = {}));
let PostFile = class PostFile {
};
exports.PostFile = PostFile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostFile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_entity_1.Post, (post) => post.file, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", post_entity_1.Post)
], PostFile.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostFile.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostFile.prototype, "s3Key", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostFile.prototype, "originalFileName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: FileType }),
    __metadata("design:type", String)
], PostFile.prototype, "fileType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], PostFile.prototype, "sizeInBytes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostFile.prototype, "mimeType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PostFile.prototype, "sortOrder", void 0);
exports.PostFile = PostFile = __decorate([
    (0, typeorm_1.Entity)('post_files')
], PostFile);
//# sourceMappingURL=post_file.entity.js.map