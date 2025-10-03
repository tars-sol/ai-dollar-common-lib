import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from 'typeorm';
import { AccessType, PostType } from './post.entity';

@Entity('posts_deleted')
export class PostDeleted {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  originalPostId: string;

  @Index()
  @Column({ type: 'uuid' })
  profileId: string;

  @Column({ type: 'text', nullable: true })
  caption?: string;

  @Column({ type: 'text', nullable: true })
  hashtagsText?: string;

  @Column({ type: 'enum', enum: AccessType })
  accessType: AccessType;

  @Column({ type: 'enum', enum: PostType })
  type: PostType;

  @Column({ type: 'boolean', default: false })
  inPortfolio: boolean;

  @Column({ type: 'int', default: 0 })
  likeCount: number;

  @Column({ type: 'int', default: 0 })
  dislikeCount: number;

  @Column({ type: 'int', default: 0 })
  commentCount: number;

  @Column({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
