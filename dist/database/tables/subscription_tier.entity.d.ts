import { Profile } from './profile.entity';
export declare class SubscriptionTier {
    id: string;
    creatorId: string;
    creator: Profile;
    name: string;
    description?: string;
    stripeProductId?: string;
    monthlyStripePriceId?: string;
    monthlyPriceCents?: number;
    annualStripePriceId?: string;
    annualPriceCents?: number;
    currency: string;
    accessMask: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
