import { PostPoll } from './post_poll.entity';
import { PostPollVote } from './post_poll_vote.entity';
export declare class PostPollOption {
    id: string;
    poll: PostPoll;
    pollId: string;
    votes: PostPollVote[];
    text: string;
    voteCount: number;
}
