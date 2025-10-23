import { Profile } from './profile.entity';
import { Campaign } from './campaign.entity';
import { ProfileTaskProgress } from './profile_task_progress.entity';
import { Payout } from './payout.entity';
export declare class ProfileCampaign {
    id: string;
    profile: Profile;
    profileId: string;
    campaign: Campaign;
    tasks: ProfileTaskProgress[];
    campaignId: string;
    completed: boolean;
    completedAt: Date | null;
    payout: Payout | null;
    payoutId: string | null;
    rewarded: boolean;
    rewardedAt: Date | null;
    joinedAt: Date;
}
