import { Profile } from './profile.entity';
export declare class ConnectedAccounts {
    id: string;
    accountId: string;
    email: string;
    isActive: boolean;
    profile: Profile;
    profileId: string;
    onBoardingUrl: string;
    createdAt: Date;
    updatedAt: Date;
}
