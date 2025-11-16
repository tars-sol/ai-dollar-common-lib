import { Profile } from './profile.entity';
import { User } from './user.entity';
import { SubscriptionTier } from './subscription_tier.entity';
export declare enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED",
    EXPIRED = "EXPIRED"
}
export declare class ProfileSubscription {
    id: string;
    subscriberId: string;
    subscriber: User;
    creatorId: string;
    creator: Profile;
    tierId: string | null;
    tier?: SubscriptionTier | null;
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    cancelAtPeriodEnd: boolean;
    status: SubscriptionStatus;
    stripeSubscriptionId: string | null;
    stripeCustomerId: string | null;
    createdAt: Date;
    updatedAt: Date;
}
