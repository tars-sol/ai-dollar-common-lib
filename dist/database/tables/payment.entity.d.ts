import { Brand } from './brand.entity';
import { Campaign } from './campaign.entity';
export declare enum PaymentStatus {
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}
export declare class Payment {
    id: string;
    clientSecretKey: string;
    amount: number;
    currency: string;
    transactionId: string;
    status: PaymentStatus;
    brand: Brand;
    brandId: string;
    campaign: Campaign;
    campaignId: string;
    createdAt: Date;
    updatedAt: Date;
}
