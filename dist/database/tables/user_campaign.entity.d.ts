import { Profile } from './profile.entity';
import { Campaign } from './campaign.entity';
export declare class UserCampaign {
    id: string;
    user: Profile;
    userId: string;
    campaign: Campaign;
    campaignId: string;
    joinedAt: Date;
}
