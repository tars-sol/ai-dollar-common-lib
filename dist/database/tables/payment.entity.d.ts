import { Brand } from './brand.entity';
import { Campaign } from './campaign.entity';
export declare enum PaymentStatus {
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed",
    REFUND_INITIATED = "refund_initiated",
    REFUNDED = "refunded",
    REFUND_FAILED = "refund_failed"
}
export declare class Payment {
    id: string;
    clientSecretKey: string;
    amount: number;
    currency: string;
    transactionId: string;
    status: PaymentStatus;
    brand: Brand;
    fees: number;
    brandId: string;
    campaign: Campaign;
    campaignId: string;
    paidOn: Date;
    /** QUICK FLAGS for full refund visibility */
    isRefunded: boolean;
    /** Convenience: store Stripe refund id for fast reads */
    refundStripeId: string;
    refundedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
