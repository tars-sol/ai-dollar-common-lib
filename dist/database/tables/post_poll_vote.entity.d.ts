import { PostPollOption } from './post_option.entity';
import { PostPoll } from './post_poll.entity';
import { Profile } from './profile.entity';
export declare class PostPollVote {
    id: string;
    poll: PostPoll;
    pollId: string;
    profile: Profile;
    profileId: string;
    option: PostPollOption;
    optionId: string;
    createdAt: Date;
}
