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
exports.SubscriptionTier = void 0;
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
let SubscriptionTier = class SubscriptionTier {
};
exports.SubscriptionTier = SubscriptionTier;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'creatorId' }),
    __metadata("design:type", profile_entity_1.Profile)
], SubscriptionTier.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "stripeProductId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, unique: true }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "monthlyStripePriceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SubscriptionTier.prototype, "monthlyPriceCents", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, unique: true }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "annualStripePriceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SubscriptionTier.prototype, "annualPriceCents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'usd' }),
    __metadata("design:type", String)
], SubscriptionTier.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], SubscriptionTier.prototype, "accessMask", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], SubscriptionTier.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SubscriptionTier.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SubscriptionTier.prototype, "updatedAt", void 0);
exports.SubscriptionTier = SubscriptionTier = __decorate([
    (0, typeorm_1.Entity)('subscription_tiers'),
    (0, typeorm_1.Index)(['creatorId', 'name'], { unique: true }),
    (0, typeorm_1.Check)(`(monthly_price_cents IS NOT NULL AND monthly_price_cents >= 0) OR monthly_price_cents IS NULL`),
    (0, typeorm_1.Check)(`(annual_price_cents  IS NOT NULL AND annual_price_cents  >= 0) OR annual_price_cents  IS NULL`),
    (0, typeorm_1.Check)(`entitlements_mask >= 0`),
    (0, typeorm_1.Check)(`currency ~ '^[A-Za-z]{3,10}$'`),
    (0, typeorm_1.Check)(`(monthly_stripe_price_id IS NOT NULL OR annual_stripe_price_id IS NOT NULL)`)
], SubscriptionTier);
//# sourceMappingURL=subscription_tier.entity.js.map