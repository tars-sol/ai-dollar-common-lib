export declare enum EventVerb {
    POST_CREATED = "POST_CREATED",
    POST_UPDATED = "POST_UPDATED",
    POST_DELETED = "POST_DELETED",
    POST_VIEWED = "POST_VIEWED",
    COMMENT_CREATED = "COMMENT_CREATED",
    COMMENT_UPDATED = "COMMENT_UPDATED",
    COMMENT_DELETED = "COMMENT_DELETED",
    LIKE_ADDED = "LIKE_ADDED",
    LIKE_REMOVED = "LIKE_REMOVED",
    FOLLOWED = "FOLLOWED",
    UNFOLLOWED = "UNFOLLOWED",
    SUBSCRIBED = "SUBSCRIBED",
    UNSUBSCRIBED = "UNSUBSCRIBED"
}
export declare enum EntityType {
    PROFILE = "PROFILE",
    POST = "POST",
    COMMENT = "COMMENT",
    LIKE = "LIKE",
    SUBSCRIPTION = "SUBSCRIPTION",
    FOLLOW = "FOLLOW"
}
export declare class UserEvent {
    id: string;
    /** Who performed the action (Profile.id) */
    actorId: string;
    /** The primary thing acted upon (e.g., post liked, post commented) */
    objectType: EntityType;
    objectId: string;
    /** Optional secondary thing (e.g., follow target profile, subscription creator) */
    targetType?: EntityType | null;
    targetId?: string | null;
    /** Normalized post context (helps feeds & analytics) */
    postId?: string | null;
    /** What happened */
    verb: EventVerb;
    /** Idempotency/dedup key (e.g., `${verb}:${actorId}:${objectType}:${objectId}` or webhook id) */
    dedupeKey?: string | null;
    createdAt: Date;
}
