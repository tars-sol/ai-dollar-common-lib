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
import { Profile } from './profile.entity';
export enum ReactionType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}
@Entity('post_reactions')
@Unique(['postId', 'profileId'])
export class PostReactions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' }) // <-- make it explicit
  post: Post;

  @Index()
  @Column({ name: 'postId', type: 'uuid' }) // <-- same column name
  postId: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profileId' })
  profile: Profile;
  @Column({ type: 'enum', enum: ReactionType })
  reactionType: ReactionType;

  @Index()
  @Column({ name: 'profileId', type: 'uuid' })
  profileId: string;

  @CreateDateColumn()
  createdAt: Date;
}
