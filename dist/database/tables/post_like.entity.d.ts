import { Post } from './post.entity';
import { Profile } from './profile.entity';
export declare class PostLike {
    id: string;
    post: Post;
    postId: string;
    profile: Profile;
    profileId: string;
    createdAt: Date;
}
