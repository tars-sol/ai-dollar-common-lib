import { Post } from './post.entity';
export declare enum ArticleStatus {
    DRAFT = "DRAFT",
    REVIEW = "REVIEW",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}
export declare class Article {
    id: string;
    post: Post;
    postId: string;
    title: string;
    status: ArticleStatus;
    contentJson: Record<string, unknown>;
    language: string;
    createdAt: Date;
    updatedAt: Date;
}
