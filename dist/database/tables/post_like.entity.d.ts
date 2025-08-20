import { Post } from "./post.entity";
import { User } from "./user.entity";
export declare class PostLike {
    id: string;
    post: Post;
    postId: string;
    user: User;
    userId: string;
    createdAt: Date;
}
