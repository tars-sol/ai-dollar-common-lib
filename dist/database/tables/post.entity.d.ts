import { PostMedia } from './post_media.entity';
import { PostPoll } from './post_poll.entity';
import { PostFile } from './post_file.entity';
import { PostComment } from './post_comment.entity';
import { PostLike } from './post_like.entity';
import { Profile } from './profile.entity';
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
    profile: Profile;
    profileId: string;
    caption?: string;
    accessType: AccessType;
    type: PostType;
    createdAt: Date;
    updatedAt: Date;
    media?: PostMedia;
    file?: PostFile;
    poll?: PostPoll;
    likeCount: number;
    commentCount: number;
    comments?: PostComment[];
    likes?: PostLike[];
}
