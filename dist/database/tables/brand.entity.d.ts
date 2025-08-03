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
    websiteUrl: string;
    payments: Payment[];
    createdAt: Date;
    updatedAt: Date;
}
