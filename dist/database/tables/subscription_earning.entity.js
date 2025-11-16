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
exports.SubscriptionEarning = exports.SubscriptionEarningStatus = void 0;
const typeorm_1 = require("typeorm");
const profile_subscribe_entity_1 = require("./profile_subscribe.entity");
var SubscriptionEarningStatus;
(function (SubscriptionEarningStatus) {
    SubscriptionEarningStatus["PENDING"] = "PENDING";
    SubscriptionEarningStatus["AVAILABLE"] = "AVAILABLE";
    SubscriptionEarningStatus["WITHHELD"] = "WITHHELD";
    SubscriptionEarningStatus["TRANSFERRED"] = "TRANSFERRED";
    SubscriptionEarningStatus["REFUNDED"] = "REFUNDED";
    SubscriptionEarningStatus["REVERSED"] = "REVERSED";
    SubscriptionEarningStatus["CHARGEBACK"] = "CHARGEBACK";
    SubscriptionEarningStatus["TRANSFER_FAILED"] = "TRANSFER_FAILED";
})(SubscriptionEarningStatus || (exports.SubscriptionEarningStatus = SubscriptionEarningStatus = {}));
let SubscriptionEarning = class SubscriptionEarning {
};
exports.SubscriptionEarning = SubscriptionEarning;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SubscriptionEarning.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], SubscriptionEarning.prototype, "subscriptionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_subscribe_entity_1.ProfileSubscription, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'subscriptionId' }),
    __metadata("design:type", profile_subscribe_entity_1.ProfileSubscription)
], SubscriptionEarning.prototype, "subscription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], SubscriptionEarning.prototype, "amountCents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'usd' }),
    __metadata("design:type", String)
], SubscriptionEarning.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], SubscriptionEarning.prototype, "availableAt", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: SubscriptionEarningStatus, default: SubscriptionEarningStatus.PENDING }),
    __metadata("design:type", String)
], SubscriptionEarning.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)({ unique: true, where: `"stripeInvoiceId" IS NOT NULL` }),
    __metadata("design:type", Object)
], SubscriptionEarning.prototype, "stripeInvoiceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Object)
], SubscriptionEarning.prototype, "stripePaymentIntentId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SubscriptionEarning.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SubscriptionEarning.prototype, "updatedAt", void 0);
exports.SubscriptionEarning = SubscriptionEarning = __decorate([
    (0, typeorm_1.Entity)('subscription_earnings')
], SubscriptionEarning);
//# sourceMappingURL=subscription_earning.entity.js.map