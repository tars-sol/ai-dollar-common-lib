import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PostPoll } from './post_poll.entity';
import { PostPollVote } from './post_poll_vote.entity';

@Entity('post_poll_option')
@Unique(['pollId', 'text'])
export class PostPollOption {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => PostPoll, (poll) => poll.options, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pollId' })
  poll: PostPoll;

  @Index()
  @Column()
  pollId: string;
  @OneToMany(() => PostPollVote, (v) => v.option)
  votes: PostPollVote[];

  @Column({ length: 120 })
  text: string;
  @Column({ type: 'int', default: 0 })
  voteCount: number; // denormalized
}
