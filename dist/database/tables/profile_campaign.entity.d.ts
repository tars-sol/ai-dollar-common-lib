import { Profile } from './profile.entity';
import { Campaign } from './campaign.entity';
export declare class ProfileCampaign {
    id: string;
    profile: Profile;
    profileId: string;
    campaign: Campaign;
    campaignId: string;
    joinedAt: Date;
}
