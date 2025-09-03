import { Post } from './post.entity';
import { PostPollOption } from './post_option.entity';
export declare class PostPoll {
    id: string;
    post: Post;
    postId: string;
    endsAt: Date;
    allowMultiple: boolean;
    maxChoices?: number;
    options: PostPollOption[];
    votedProfilePics: string[];
}
