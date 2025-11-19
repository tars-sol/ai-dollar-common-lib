import { Post } from './post.entity';
import { Profile } from './profile.entity';
export declare class PostDailyView {
    id: string;
    postId: string;
    post: Post;
    creatorId: string;
    creator: Profile;
    date: string;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}
