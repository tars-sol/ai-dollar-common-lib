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
exports.PostPollVote = void 0;
const typeorm_1 = require("typeorm");
const post_option_entity_1 = require("./post_option.entity");
const post_poll_entity_1 = require("./post_poll.entity");
const profile_entity_1 = require("./profile.entity");
let PostPollVote = class PostPollVote {
};
exports.PostPollVote = PostPollVote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostPollVote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_poll_entity_1.PostPoll, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'pollId' }),
    __metadata("design:type", post_poll_entity_1.PostPoll)
], PostPollVote.prototype, "poll", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ name: 'pollId', type: 'uuid' }),
    __metadata("design:type", String)
], PostPollVote.prototype, "pollId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'profileId' }),
    __metadata("design:type", profile_entity_1.Profile)
], PostPollVote.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ name: 'profileId', type: 'uuid' }),
    __metadata("design:type", String)
], PostPollVote.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_option_entity_1.PostPollOption, (o) => o.votes, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'optionId' }),
    __metadata("design:type", post_option_entity_1.PostPollOption)
], PostPollVote.prototype, "option", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ name: 'optionId', type: 'uuid' }),
    __metadata("design:type", String)
], PostPollVote.prototype, "optionId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PostPollVote.prototype, "createdAt", void 0);
exports.PostPollVote = PostPollVote = __decorate([
    (0, typeorm_1.Entity)('post_poll_votes'),
    (0, typeorm_1.Unique)('uniq_vote_per_option', ['pollId', 'userId', 'optionId'])
], PostPollVote);
//# sourceMappingURL=post_poll_vote.entity.js.map