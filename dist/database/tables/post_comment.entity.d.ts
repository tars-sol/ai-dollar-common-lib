import { Post } from './post.entity';
import { Profile } from './profile.entity';
export declare class PostComment {
    id: string;
    post: Post;
    postId: string;
    profile: Profile;
    profileId: string;
    text: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
