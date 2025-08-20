import { Profile } from './profile.entity';
export declare enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED",
    EXPIRED = "EXPIRED"
}
export declare class ProfileSubscription {
    id: string;
    subscriberId: string;
    creatorId: string;
    subscriber: Profile;
    creator: Profile;
    status: SubscriptionStatus;
    createdAt: Date;
    updatedAt: Date;
}
