import { Campaign } from './campaign.entity';
export declare enum TaskType {
    IN_APP = "IN_APP",
    OFF_APP = "OFF_APP",
    ON_CHAIN = "ON_CHAIN"
}
export declare enum TaskAction {
    LIKE_POST = "LIKE_POST",
    COMMENT_ON_POST = "COMMENT_ON_POST",
    FOLLOW_PROFILE = "FOLLOW_PROFILE",
    FOLLOW_BRAND = "FOLLOW_BRAND",
    SUBSCRIBE_PROFILE = "SUBSCRIBE_PROFILE",
    CREATE_POST_ABOUT_PROFILE = "CREATE_POST_ABOUT_PROFILE",
    CREATE_POST_ABOUT_BRAND = "CREATE_POST_ABOUT_BRAND",
    MENTION_PROFILE_IN_COMMENTS = "MENTION_PROFILE_IN_COMMENTS",
    MENTION_BRAND_IN_COMMENTS = "MENTION_BRAND_IN_COMMENTS"
}
export type TaskRule = {
    action: TaskAction;
    targets?: Array<{
        targetType: 'POST' | 'PROFILE' | 'BRAND';
        targetId: string;
    }>;
    countRequired: number;
    mode?: 'anyOf' | 'allOf';
    window?: {
        from?: string;
        to?: string;
    };
    content?: {
        requireMention?: boolean;
        requireMedia?: boolean;
        minChars?: number;
    };
};
export declare class Task {
    id: string;
    campaign: Campaign;
    campaignId: string;
    title: string;
    type: TaskType;
    description: string;
    rule: TaskRule;
    createdAt: Date;
    updatedAt: Date;
}
