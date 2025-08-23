import { Post } from './post.entity';
export declare enum MediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    GIF = "GIF"
}
export declare class PostMedia {
    id: string;
    post: Post;
    postId: string;
    mediaType: MediaType;
    giphyUrl: string;
    s3Key: string;
    originalFileName: string;
    mimeType: string;
    durationSec?: number;
}
