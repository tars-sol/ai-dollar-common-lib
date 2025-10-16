import { Profile } from './profile.entity';
import { User } from './user.entity';
export declare enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED",
    EXPIRED = "EXPIRED"
}
export declare class ProfileSubscription {
    id: string;
    subscriberId: string;
    creatorId: string;
    subscriber: User;
    creator: Profile;
    status: SubscriptionStatus;
    createdAt: Date;
    updatedAt: Date;
}
