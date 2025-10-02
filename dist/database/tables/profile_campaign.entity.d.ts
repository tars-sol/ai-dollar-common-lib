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
    completed: boolean;
    completedAt: Date | null;
    rewarded: boolean;
    rewardedAt: Date | null;
    joinedAt: Date;
}
