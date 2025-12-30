import { Brand } from './brand.entity';
import { Task } from './task.entity';
import { Payment } from './payment.entity';
export declare enum CampaignStatus {
    DRAFT = "DRAFT",// Campaign created but required fields are incomplete
    AWAITING_PAYMENT = "AWAITING_PAYMENT",// Details complete, Stripe session initiated but payment not received
    FUNDED_PENDING_START = "FUNDED_PENDING_START",// Fully paid, startDate is in the future
    ACTIVE = "ACTIVE",// startDate reached, campaign is live
    ENDED_PENDING_PAYOUT = "ENDED_PENDING_PAYOUT",// endDate passed, payouts not triggered yet
    ENDED_PARTIALLY_PAID = "ENDED_PARTIALLY_PAID",// Some payouts made, others pending
    ENDED_PAID = "ENDED_PAID",// All payouts successfully dispatched or refunded
    EXPIRED_UNFUNDED = "EXPIRED_UNFUNDED",// startDate passed but no payment received
    CANCELLED = "CANCELLED"
}
export declare class Campaign {
    id: string;
    brand: Brand;
    name: string;
    description: string;
    bannerUrl: string;
    brandId: string;
    status: CampaignStatus;
    tasks: Task[];
    isPrivate: boolean;
    amountToInvest: number;
    availableBudget: number;
    amountPaid: number;
    totalParticipants: number;
    startDate: Date;
    endDate: Date;
    payment: Payment;
    fts: string;
    createdAt: Date;
    updatedAt: Date;
}
