import { ProfileSubscription } from './profile_subscribe.entity';
export declare enum SubscriptionEarningStatus {
    PENDING = "PENDING",
    AVAILABLE = "AVAILABLE",
    WITHHELD = "WITHHELD",
    TRANSFERRED = "TRANSFERRED",
    REFUNDED = "REFUNDED",
    REVERSED = "REVERSED",
    CHARGEBACK = "CHARGEBACK",
    TRANSFER_FAILED = "TRANSFER_FAILED"
}
export declare class SubscriptionEarning {
    id: string;
    subscriptionId: string;
    subscription: ProfileSubscription;
    amountCents: number;
    currency: string;
    availableAt: Date;
    status: SubscriptionEarningStatus;
    createdAt: Date;
    updatedAt: Date;
}
