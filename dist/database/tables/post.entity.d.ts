import { User } from './user.entity';
export declare enum AccessType {
    PUBLIC = "PUBLIC",
    SUBSCRIBER = "SUBSCRIBER",
    PAID = "PAID"
}
export declare enum FileType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    CODE = "CODE",
    OTHER = "OTHER"
}
export declare class Post {
    id: string;
    user: User;
    userId: string;
    caption: string;
    accessType: AccessType;
    priceInCents?: number;
    s3Key: string;
    fileType: FileType;
    originalFileName: string;
    createdAt: Date;
    updatedAt: Date;
}
