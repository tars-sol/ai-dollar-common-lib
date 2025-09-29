import { Profile } from './profile.entity';
import { Campaign } from './campaign.entity';
import { ProfileTaskProgress } from './profile_task_progress.entity';
export declare class ProfileCampaign {
    id: string;
    profile: Profile;
    profileId: string;
    campaign: Campaign;
    tasks: ProfileTaskProgress[];
    campaignId: string;
    joinedAt: Date;
}
