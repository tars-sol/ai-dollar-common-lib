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
exports.Campaign = exports.CampaignStatus = void 0;
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("./brand.entity");
const task_entity_1 = require("./task.entity");
const payment_entity_1 = require("./payment.entity");
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["DRAFT"] = "DRAFT";
    CampaignStatus["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    CampaignStatus["FUNDED_PENDING_START"] = "FUNDED_PENDING_START";
    CampaignStatus["ACTIVE"] = "ACTIVE";
    CampaignStatus["ENDED_PENDING_PAYOUT"] = "ENDED_PENDING_PAYOUT";
    CampaignStatus["ENDED_PARTIALLY_PAID"] = "ENDED_PARTIALLY_PAID";
    CampaignStatus["ENDED_PAID"] = "ENDED_PAID";
    CampaignStatus["EXPIRED_UNFUNDED"] = "EXPIRED_UNFUNDED";
    CampaignStatus["CANCELLED"] = "CANCELLED";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
let Campaign = class Campaign {
};
exports.Campaign = Campaign;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Campaign.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, (brand) => brand.campaigns, {
        onDelete: 'CASCADE',
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'brandId' }),
    __metadata("design:type", brand_entity_1.Brand)
], Campaign.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Campaign.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Campaign.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Campaign.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Campaign.prototype, "brandId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CampaignStatus,
        default: CampaignStatus.DRAFT,
    }),
    __metadata("design:type", String)
], Campaign.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.campaign, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Campaign.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Campaign.prototype, "isPrivate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Campaign.prototype, "amountToInvest", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Campaign.prototype, "availableBudget", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Campaign.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', nullable: true }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalParticipants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Campaign.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Campaign.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => payment_entity_1.Payment, (payment) => payment.campaign),
    __metadata("design:type", payment_entity_1.Payment)
], Campaign.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.Index)('idx_campaigns_fts', { synchronize: false }),
    (0, typeorm_1.Column)({
        type: 'tsvector',
        asExpression: `
      setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'A')
    `,
        generatedType: 'STORED',
        nullable: true,
        select: false,
    }),
    __metadata("design:type", String)
], Campaign.prototype, "fts", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Campaign.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Campaign.prototype, "updatedAt", void 0);
exports.Campaign = Campaign = __decorate([
    (0, typeorm_1.Entity)('campaigns')
], Campaign);
//# sourceMappingURL=campaign.entity.js.map