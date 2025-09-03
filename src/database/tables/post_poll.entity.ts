import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { PostPollOption } from './post_option.entity';

@Entity('post_poll')
export class PostPoll {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Post, (post) => post.poll, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: Post;

  @Index()
  @Column()
  postId: string;

  @Column({ type: 'timestamptz' })
  endsAt: Date;

  @Column({ type: 'boolean', default: false })
  allowMultiple: boolean;

  // If allowMultiple=true, enforce max N choices
  @Column({ type: 'int', nullable: true, default: 1 })
  maxChoices?: number;
  @OneToMany(() => PostPollOption, (o) => o.poll, {
    cascade: ['insert', 'remove'],
  })
  options: PostPollOption[];
  @Column({ type: 'text', array: true, default: () => "'{}'::text[]" })
  votedProfilePics: string[];
}
