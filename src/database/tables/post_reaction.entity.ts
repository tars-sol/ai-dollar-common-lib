// entities/post-like.entity.ts
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
import { Post } from './post.entity';
import { User } from './user.entity';
export enum ReactionType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}
@Entity('post_reactions')
@Unique(['postId', 'userId'])
export class PostReactions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' }) // <-- make it explicit
  post: Post;

  @Index()
  @Column({ name: 'postId', type: 'uuid' }) // <-- same column name
  postId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'enum', enum: ReactionType })
  reactionType: ReactionType;

  @Index()
  @Column({ name: 'userId', type: 'uuid' })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;
}
