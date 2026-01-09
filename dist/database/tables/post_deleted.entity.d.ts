export declare class PostDeleted {
    id: string;
    originalPostId: string;
    profileId: string;
    caption?: string;
    hashtagsText?: string;
    inPortfolio: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    typesenseNeedsDelete: boolean;
    typesenseAttempts: number;
    typesenseLastError?: string;
    typesenseDeletedAt?: Date;
    qdrantNeedsDelete: boolean;
    qdrantAttempts: number;
    qdrantLastError?: string;
    qdrantDeletedAt?: Date;
}
