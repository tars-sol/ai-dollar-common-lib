import { AccessType, PostType } from './post.entity';
export declare class PostDeleted {
    id: string;
    originalPostId: string;
    profileId: string;
    caption?: string;
    hashtagsText?: string;
    accessType: AccessType;
    type: PostType;
    inPortfolio: boolean;
    likeCount: number;
    dislikeCount: number;
    commentCount: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
