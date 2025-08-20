import { Profile } from './profile.entity';
export declare class ProfileFollow {
    id: string;
    followerId: string;
    targetId: string;
    follower: Profile;
    target: Profile;
    createdAt: Date;
}
