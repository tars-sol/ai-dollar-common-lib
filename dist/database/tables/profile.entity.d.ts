import { User } from './user.entity';
export declare class Profile {
    id: string;
    user: User;
    userId: string;
    avatarUrl: string;
    bannerUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    facebook: string;
    youtube: string;
    telegram: string;
    discord: string;
    tiktok: string;
    instagram: string;
    isVerified: boolean;
    subscribersCount: number;
    viewsCount: number;
    earningCents: number;
    createdAt: Date;
    updatedAt: Date;
}
