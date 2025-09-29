import { Profile } from './profile.entity';
import { Task } from './task.entity';
import { ProfileCampaign } from './profile_campaign.entity';
export declare class ProfileTaskProgress {
    id: string;
    user: Profile;
    userId: string;
    task: Task;
    taskId: string;
    profileCampaign: ProfileCampaign;
    profileCampaignId: string;
    isMarkedDoneByBrand: boolean;
    brandComment?: string;
    updatedAt: Date;
}
