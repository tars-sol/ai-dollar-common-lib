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
exports.PostPollOption = void 0;
const typeorm_1 = require("typeorm");
const post_poll_entity_1 = require("./post_poll.entity");
const post_poll_vote_entity_1 = require("./post_poll_vote.entity");
let PostPollOption = class PostPollOption {
};
exports.PostPollOption = PostPollOption;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostPollOption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_poll_entity_1.PostPoll, (poll) => poll.options, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'pollId' }),
    __metadata("design:type", post_poll_entity_1.PostPoll)
], PostPollOption.prototype, "poll", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostPollOption.prototype, "pollId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_poll_vote_entity_1.PostPollVote, (v) => v.option),
    __metadata("design:type", Array)
], PostPollOption.prototype, "votes", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], PostPollOption.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PostPollOption.prototype, "voteCount", void 0);
exports.PostPollOption = PostPollOption = __decorate([
    (0, typeorm_1.Entity)('post_poll_option'),
    (0, typeorm_1.Unique)(['pollId', 'text'])
], PostPollOption);
//# sourceMappingURL=post_option.entity.js.map