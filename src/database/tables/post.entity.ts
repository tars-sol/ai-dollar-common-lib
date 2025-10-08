import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { PostMedia } from './post_media.entity';
import { PostPoll } from './post_poll.entity';
import { PostFile } from './post_file.entity';
import { PostComment } from './post_comment.entity';
import { PostReactions } from './post_reaction.entity';
import { Profile } from './profile.entity';

export enum AccessType {
  PUBLIC = 'PUBLIC',
  SUBSCRIBER = 'SUBSCRIBER',
  // PAID = 'PAID',
}

export enum PostType {
  TEXT = 'TEXT',
  MEDIA = 'MEDIA',
  POLL = 'POLL',
  FILE = 'FILE',
  ARTICLE = 'ARTICLE'
}

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Index()
  @Column()
  profileId: string;

  @Column({ type: 'text', nullable: true })
  caption?: string;

  @Column({ type: 'text', nullable: true })
  hashtagsText?: string;

  @Index('idx_posts_fts', { synchronize: false })
  @Column({
    type: 'tsvector',
    asExpression: `
      setweight(to_tsvector('english_unaccent', coalesce("hashtagsText", '')), 'A')
    `,
    generatedType: 'STORED',
    nullable: true,
    select: false,
  })
  fts!: string;

  @Column({ type: 'enum', enum: AccessType, default: AccessType.PUBLIC })
  accessType: AccessType;

  // only required when accessType = PAID
  // @Column({ type: 'int', nullable: true })
  // priceInCents?: number;

  @Column({ type: 'enum', enum: PostType })
  type: PostType;
  @Column({ type: 'boolean', default: false })
  inPortfolio: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @OneToOne(() => PostMedia, (m) => m.post)
  media?: PostMedia;
  @OneToOne(() => PostFile, (m) => m.post)
  file?: PostFile;

  @OneToOne(() => PostPoll, (p) => p.post)
  poll?: PostPoll;

  @Column({ type: 'int', default: 0 })
  likeCount: number;
  @Column({ type: 'int', default: 0 })
  dislikeCount: number;

  @Column({ type: 'int', default: 0 })
  commentCount: number;

  @OneToMany(() => PostComment, (c) => c.post)
  comments?: PostComment[];

  @OneToMany(() => PostReactions, (l) => l.post)
  reactions?: PostReactions[];
}
