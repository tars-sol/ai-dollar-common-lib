import { User } from './user.entity';
import { PostMedia } from './post_media.entity';
import { PostPoll } from './post_poll.entity';
import { PostFile } from './post_file.entity';
export declare enum AccessType {
    PUBLIC = "PUBLIC",
    SUBSCRIBER = "SUBSCRIBER"
}
export declare enum PostType {
    TEXT = "TEXT",
    MEDIA = "MEDIA",// image/video/gif gallery
    POLL = "POLL",
    FILE = "FILE"
}
export declare class Post {
    id: string;
    user: User;
    userId: string;
    caption?: string;
    accessType: AccessType;
    type: PostType;
    createdAt: Date;
    updatedAt: Date;
    media?: PostMedia;
    file?: PostFile;
    poll?: PostPoll;
}
