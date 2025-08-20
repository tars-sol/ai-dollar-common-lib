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
exports.UserEvent = exports.EntityType = exports.EventVerb = void 0;
// events/user-event.entity.ts
const typeorm_1 = require("typeorm");
var EventVerb;
(function (EventVerb) {
    // post lifecycle
    EventVerb["POST_CREATED"] = "POST_CREATED";
    EventVerb["POST_UPDATED"] = "POST_UPDATED";
    EventVerb["POST_DELETED"] = "POST_DELETED";
    EventVerb["POST_VIEWED"] = "POST_VIEWED";
    // engagement
    EventVerb["COMMENT_CREATED"] = "COMMENT_CREATED";
    EventVerb["COMMENT_UPDATED"] = "COMMENT_UPDATED";
    EventVerb["COMMENT_DELETED"] = "COMMENT_DELETED";
    EventVerb["LIKE_ADDED"] = "LIKE_ADDED";
    EventVerb["LIKE_REMOVED"] = "LIKE_REMOVED";
    // social graph
    EventVerb["FOLLOWED"] = "FOLLOWED";
    EventVerb["UNFOLLOWED"] = "UNFOLLOWED";
    // subscriptions
    EventVerb["SUBSCRIBED"] = "SUBSCRIBED";
    EventVerb["UNSUBSCRIBED"] = "UNSUBSCRIBED";
})(EventVerb || (exports.EventVerb = EventVerb = {}));
var EntityType;
(function (EntityType) {
    EntityType["PROFILE"] = "PROFILE";
    EntityType["POST"] = "POST";
    EntityType["COMMENT"] = "COMMENT";
    EntityType["LIKE"] = "LIKE";
    EntityType["SUBSCRIPTION"] = "SUBSCRIPTION";
    EntityType["FOLLOW"] = "FOLLOW";
    // extend later: FILE, MEDIA, POLL, etc.
})(EntityType || (exports.EntityType = EntityType = {}));
let UserEvent = class UserEvent {
};
exports.UserEvent = UserEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], UserEvent.prototype, "actorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EntityType }),
    __metadata("design:type", String)
], UserEvent.prototype, "objectType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEvent.prototype, "objectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EntityType, nullable: true }),
    __metadata("design:type", Object)
], UserEvent.prototype, "targetType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Object)
], UserEvent.prototype, "targetId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Object)
], UserEvent.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EventVerb }),
    __metadata("design:type", String)
], UserEvent.prototype, "verb", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: true }),
    __metadata("design:type", Object)
], UserEvent.prototype, "dedupeKey", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserEvent.prototype, "createdAt", void 0);
exports.UserEvent = UserEvent = __decorate([
    (0, typeorm_1.Entity)('user_events'),
    (0, typeorm_1.Index)('idx_events_feed', ['createdAt', 'id']),
    (0, typeorm_1.Index)('idx_events_actor', ['actorId', 'createdAt']),
    (0, typeorm_1.Index)('idx_events_object', ['objectType', 'objectId']),
    (0, typeorm_1.Index)('idx_events_target', ['targetType', 'targetId']),
    (0, typeorm_1.Index)('idx_events_post', ['postId', 'createdAt'])
], UserEvent);
//# sourceMappingURL=profile_events.entity.js.map