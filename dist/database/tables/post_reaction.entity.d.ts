import { Post } from './post.entity';
import { User } from './user.entity';
export declare enum ReactionType {
    LIKE = "LIKE",
    DISLIKE = "DISLIKE"
}
export declare class PostReactions {
    id: string;
    post: Post;
    postId: string;
    user: User;
    reactionType: ReactionType;
    userId: string;
    createdAt: Date;
}
