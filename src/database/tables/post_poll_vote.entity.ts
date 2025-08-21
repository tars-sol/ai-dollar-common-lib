import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PostPollOption } from './post_option.entity';
import { PostPoll } from './post_poll.entity';
import { Profile } from './profile.entity';

@Entity('post_poll_votes')
@Unique('uniq_vote_per_option', ['pollId', 'userId', 'optionId'])
export class PostPollVote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => PostPoll, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pollId' })
  poll: PostPoll;
  @Index()
  @Column({ name: 'pollId', type: 'uuid' })
  pollId: string;
  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Index()
  @Column({ name: 'profileId', type: 'uuid' })
  profileId: string;

  @ManyToOne(() => PostPollOption, (o) => o.votes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'optionId' })
  option: PostPollOption;

  @Index()
  @Column({ name: 'optionId', type: 'uuid' })
  optionId: string;

  @CreateDateColumn()
  createdAt: Date;
}
