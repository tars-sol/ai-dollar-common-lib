import { Profile } from './profile.entity';
import { Task } from './task.entity';
import { ProfileCampaign } from './profile_campaign.entity';
export interface EvidenceItem {
    eventId: string;
    eventType: string;
    targetId?: string;
    postId?: string;
    commentId?: string;
    snippet?: string;
    at: string;
}
export declare enum ProgressComputedBy {
    SERVER = "SERVER",
    BRAND = "BRAND",
    MIXED = "MIXED"
}
export declare class ProfileTaskProgress {
    id: string;
    profile: Profile;
    profileId: string;
    task: Task;
    taskId: string;
    profileCampaign: ProfileCampaign;
    profileCampaignId: string;
    progressCount: number;
    isCompletedByServer: boolean;
    completedAt: Date | null;
    computedBy: ProgressComputedBy;
    isMarkedDoneByBrand: boolean;
    brandComment?: string;
    evidence: EvidenceItem[];
    createdAt: Date;
    updatedAt: Date;
}
