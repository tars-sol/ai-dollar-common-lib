import { User } from './user.entity';
export declare class Profile {
    id: string;
    user: User;
    userId: string;
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    facebook: string;
    youtube: string;
    tiktok: string;
    instagram: string;
    isVerified: boolean;
    followersCount: number;
    followingCount: number;
    subscribersCount: number;
    createdAt: Date;
    updatedAt: Date;
}
