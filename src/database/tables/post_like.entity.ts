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

@Entity('post_likes')
@Unique(['postId', 'profileId'])
export class PostLike {
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

  @Index()
  @Column({ name: 'profileId', type: 'uuid' })
  profileId: string;

  @CreateDateColumn()
  createdAt: Date;
}
