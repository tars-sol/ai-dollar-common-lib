import { User } from './user.entity';
export declare class UserFollow {
    id: string;
    follower: User;
    following: User;
    createdAt: Date;
}
