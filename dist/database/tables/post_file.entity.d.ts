import { Post } from './post.entity';
export declare enum FileType {
    PDF = "PDF",
    CSV = "CSV",
    ZIP = "ZIP",
    JSON = "JSON",
    TXT = "TXT"
}
export declare class PostFile {
    id: string;
    post: Post;
    postId: string;
    s3Key: string;
    originalFileName: string;
    fileType: FileType;
    sizeInBytes?: number;
    mimeType: string;
    sortOrder: number;
}
