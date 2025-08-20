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
exports.ProfileFollow = void 0;
// profiles/entities/profile-follow.entity.ts
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
let ProfileFollow = class ProfileFollow {
};
exports.ProfileFollow = ProfileFollow;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProfileFollow.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileFollow.prototype, "followerId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileFollow.prototype, "targetId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'followerId' }),
    __metadata("design:type", profile_entity_1.Profile)
], ProfileFollow.prototype, "follower", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'targetId' }),
    __metadata("design:type", profile_entity_1.Profile)
], ProfileFollow.prototype, "target", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProfileFollow.prototype, "createdAt", void 0);
exports.ProfileFollow = ProfileFollow = __decorate([
    (0, typeorm_1.Entity)('profile_follows'),
    (0, typeorm_1.Unique)(['followerId', 'targetId']) // one follow per pair
    ,
    (0, typeorm_1.Check)(`"followerId" <> "targetId"`) // no self-follow
], ProfileFollow);
//# sourceMappingURL=profile_follow.entity.js.map