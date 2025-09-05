import { User } from './user.entity';
export declare class UserFollow {
    id: string;
    followerId: string;
    followingId: string;
    follower: User;
    following: User;
    createdAt: Date;
}
