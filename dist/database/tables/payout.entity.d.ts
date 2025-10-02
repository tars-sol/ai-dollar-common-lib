import { Brand } from './brand.entity';
import { Campaign } from './campaign.entity';
import { Profile } from './profile.entity';
export declare enum PayoutStatus {
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}
export declare class Payout {
    id: string;
    amount: number;
    currency: string;
    transactionId: string;
    status: PayoutStatus;
    brand: Brand;
    brandId: string;
    campaign: Campaign;
    campaignId: string;
    profile: Profile;
    profileId: string;
    paidOn: Date;
    createdAt: Date;
    updatedAt: Date;
}
