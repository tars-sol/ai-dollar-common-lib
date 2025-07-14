import { User } from './user.entity';
export declare class Profile {
    id: string;
    user: User;
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    github: string;
    youtube: string;
    linkedin: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
