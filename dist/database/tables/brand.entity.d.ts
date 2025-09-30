import { User } from './user.entity';
import { Payment } from './payment.entity';
import { Campaign } from './campaign.entity';
export declare class Brand {
    id: string;
    user: User;
    campaigns: Campaign[];
    userId: string;
    name: string;
    description: string;
    logoUrl: string;
    discord: string;
    twitter: string;
    telegram: string;
    tags: string[];
    campaignCount: number;
    tokenName: string;
    websiteUrl: string;
    payments: Payment[];
    fts: string;
    createdAt: Date;
    updatedAt: Date;
}
