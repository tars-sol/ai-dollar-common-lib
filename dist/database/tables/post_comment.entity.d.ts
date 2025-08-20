import { Post } from './post.entity';
import { User } from './user.entity';
export declare class PostComment {
    id: string;
    post: Post;
    postId: string;
    user: User;
    userId: string;
    text: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
