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
exports.PostPoll = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const post_option_entity_1 = require("./post_option.entity");
let PostPoll = class PostPoll {
};
exports.PostPoll = PostPoll;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostPoll.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => post_entity_1.Post, (post) => post.poll, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'postId' }),
    __metadata("design:type", post_entity_1.Post)
], PostPoll.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostPoll.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], PostPoll.prototype, "endsAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PostPoll.prototype, "allowMultiple", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 1 }),
    __metadata("design:type", Number)
], PostPoll.prototype, "maxChoices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_option_entity_1.PostPollOption, (o) => o.poll, {
        cascade: ['insert', 'remove'],
    }),
    __metadata("design:type", Array)
], PostPoll.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, default: () => "'{}'::text[]" }),
    __metadata("design:type", Array)
], PostPoll.prototype, "votedProfilePics", void 0);
exports.PostPoll = PostPoll = __decorate([
    (0, typeorm_1.Entity)('post_poll')
], PostPoll);
//# sourceMappingURL=post_poll.entity.js.map