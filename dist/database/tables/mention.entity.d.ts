import { Post } from './post.entity';
import { PostComment } from './post_comment.entity';
import { User } from './user.entity';
export declare enum MentionTargetType {
    POST = "POST",
    COMMENT = "COMMENT"
}
export declare class Mention {
    id: string;
    targetType: MentionTargetType;
    postId: string | null;
    post?: Post | null;
    commentId: string | null;
    comment?: PostComment | null;
    mentionedUserId: string;
    mentionedUser: User;
    createdByUserId: string | null;
    createdAt: Date;
}
