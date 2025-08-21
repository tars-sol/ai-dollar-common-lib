import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { Profile } from './profile.entity';

@Entity('post_comments')
export class PostComment {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post;

  @Index()
  @Column()
  postId: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn()
  profile: Profile;

  @Index()
  @Column()
  profileId: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
