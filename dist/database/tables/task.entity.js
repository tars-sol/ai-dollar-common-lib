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
exports.Task = exports.TaskAction = exports.TaskType = void 0;
const typeorm_1 = require("typeorm");
const campaign_entity_1 = require("./campaign.entity");
var TaskType;
(function (TaskType) {
    TaskType["IN_APP"] = "IN_APP";
    TaskType["OFF_APP"] = "OFF_APP";
    TaskType["ON_CHAIN"] = "ON_CHAIN";
})(TaskType || (exports.TaskType = TaskType = {}));
// task.entity.ts
var TaskAction;
(function (TaskAction) {
    TaskAction["LIKE_POST"] = "LIKE_POST";
    TaskAction["COMMENT_ON_POST"] = "COMMENT_ON_POST";
    TaskAction["FOLLOW_PROFILE"] = "FOLLOW_PROFILE";
    TaskAction["FOLLOW_BRAND"] = "FOLLOW_BRAND";
    TaskAction["SUBSCRIBE_PROFILE"] = "SUBSCRIBE_PROFILE";
    TaskAction["CREATE_POST_ABOUT_PROFILE"] = "CREATE_POST_ABOUT_PROFILE";
    TaskAction["CREATE_POST_ABOUT_BRAND"] = "CREATE_POST_ABOUT_BRAND";
    TaskAction["MENTION_PROFILE_IN_COMMENTS"] = "MENTION_PROFILE_IN_COMMENTS";
    TaskAction["MENTION_BRAND_IN_COMMENTS"] = "MENTION_BRAND_IN_COMMENTS";
})(TaskAction || (exports.TaskAction = TaskAction = {}));
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_entity_1.Campaign, (campaign) => campaign.tasks, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'campaignId' }),
    __metadata("design:type", campaign_entity_1.Campaign)
], Task.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "campaignId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: TaskType }),
    __metadata("design:type", String)
], Task.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], Task.prototype, "rule", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)('tasks')
], Task);
//# sourceMappingURL=task.entity.js.map