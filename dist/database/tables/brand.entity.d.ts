import { User } from './user.entity';
export declare class Brand {
    id: string;
    user: User;
    userId: string;
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
    createdAt: Date;
    updatedAt: Date;
}
