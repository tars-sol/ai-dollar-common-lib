import { Post } from './post.entity';
import { Profile } from './profile.entity';
export declare enum ReactionType {
    LIKE = "LIKE",
    DISLIKE = "DISLIKE"
}
export declare class PostReactions {
    id: string;
    post: Post;
    postId: string;
    profile: Profile;
    reactionType: ReactionType;
    profileId: string;
    createdAt: Date;
}
