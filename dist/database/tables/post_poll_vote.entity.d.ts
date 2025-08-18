import { PostPollOption } from './post_option.entity';
import { PostPoll } from './post_poll.entity';
import { User } from './user.entity';
export declare class PostPollVote {
    id: string;
    poll: PostPoll;
    pollId: string;
    user: User;
    userId: string;
    option: PostPollOption;
    optionId: string;
    createdAt: Date;
}
