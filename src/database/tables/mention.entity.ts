import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { PostComment } from './post_comment.entity';
import { User } from './user.entity';

export enum MentionTargetType {
  POST = 'POST',
  COMMENT = 'COMMENT',
}

@Entity('mentions')
@Index('idx_mentions_post', ['targetType', 'postId'])
@Index('idx_mentions_comment', ['targetType', 'commentId'])
@Index('idx_mentions_user', ['mentionedUserId'])
export class Mention {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: MentionTargetType })
  targetType: MentionTargetType;

  @Column({ type: 'uuid', nullable: true })
  postId: string | null;

  @ManyToOne(() => Post, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'postId' })
  post?: Post | null;

  @Column({ type: 'uuid', nullable: true })
  commentId: string | null;

  @ManyToOne(() => PostComment, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'commentId' })
  comment?: PostComment | null;

  @Column()
  mentionedUserId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'mentionedUserId' })
  mentionedUser!: User;

  @Column({ type: 'uuid', nullable: true })
  createdByUserId: string | null;

  @CreateDateColumn()
  createdAt: Date;
}
