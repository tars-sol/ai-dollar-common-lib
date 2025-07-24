import { User } from './user.entity';
import { Payment } from './payment.entity';
export declare class Brand {
    id: string;
    user: User;
    userId: string;
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
    payments: Payment[];
    createdAt: Date;
    updatedAt: Date;
}
