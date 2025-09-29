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
exports.ProfileTaskProgress = void 0;
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
const task_entity_1 = require("./task.entity");
const profile_campaign_entity_1 = require("./profile_campaign.entity");
let ProfileTaskProgress = class ProfileTaskProgress {
};
exports.ProfileTaskProgress = ProfileTaskProgress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProfileTaskProgress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", profile_entity_1.Profile)
], ProfileTaskProgress.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileTaskProgress.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'taskId' }),
    __metadata("design:type", task_entity_1.Task)
], ProfileTaskProgress.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileTaskProgress.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_campaign_entity_1.ProfileCampaign, (profileCampaign) => profileCampaign.tasks, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'campaignId' }),
    __metadata("design:type", profile_campaign_entity_1.ProfileCampaign)
], ProfileTaskProgress.prototype, "profileCampaign", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileTaskProgress.prototype, "profileCampaignId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProfileTaskProgress.prototype, "isMarkedDoneByBrand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProfileTaskProgress.prototype, "brandComment", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProfileTaskProgress.prototype, "updatedAt", void 0);
exports.ProfileTaskProgress = ProfileTaskProgress = __decorate([
    (0, typeorm_1.Entity)('profile_task_progress'),
    (0, typeorm_1.Unique)(['userId', 'taskId']) // one progress per user per task
], ProfileTaskProgress);
//# sourceMappingURL=profile_task_progress.entity.js.map