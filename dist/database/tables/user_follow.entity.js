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
exports.UserFollow = void 0;
// profiles/entities/profile-follow.entity.ts
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserFollow = class UserFollow {
};
exports.UserFollow = UserFollow;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserFollow.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserFollow.prototype, "followerId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserFollow.prototype, "followingId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'followerId' }),
    __metadata("design:type", user_entity_1.User)
], UserFollow.prototype, "follower", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'followingId' }),
    __metadata("design:type", user_entity_1.User)
], UserFollow.prototype, "following", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserFollow.prototype, "createdAt", void 0);
exports.UserFollow = UserFollow = __decorate([
    (0, typeorm_1.Entity)('user_follows'),
    (0, typeorm_1.Unique)(['followerId', 'followingId']) // one follow per pair
    ,
    (0, typeorm_1.Check)(`"followerId" <> "followingId"`) // no self-follow
], UserFollow);
//# sourceMappingURL=user_follow.entity.js.map