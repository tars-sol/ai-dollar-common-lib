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
exports.ProfileCampaign = void 0;
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
const campaign_entity_1 = require("./campaign.entity");
const profile_task_progress_entity_1 = require("./profile_task_progress.entity");
let ProfileCampaign = class ProfileCampaign {
};
exports.ProfileCampaign = ProfileCampaign;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProfileCampaign.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'profileId' }),
    __metadata("design:type", profile_entity_1.Profile)
], ProfileCampaign.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileCampaign.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_entity_1.Campaign, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'campaignId' }),
    __metadata("design:type", campaign_entity_1.Campaign)
], ProfileCampaign.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => profile_task_progress_entity_1.ProfileTaskProgress, (task) => task.profileCampaign, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ProfileCampaign.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileCampaign.prototype, "campaignId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProfileCampaign.prototype, "joinedAt", void 0);
exports.ProfileCampaign = ProfileCampaign = __decorate([
    (0, typeorm_1.Entity)('profile_campaigns'),
    (0, typeorm_1.Unique)(['profileId', 'campaignId']) // prevent duplicate entries
], ProfileCampaign);
//# sourceMappingURL=profile_campaign.entity.js.map