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
} from 'typeorm';
import { User } from './user.entity';
import { PostMedia } from './post_media.entity';
import { PostPoll } from './post_poll.entity';
import { PostFile } from './post_file.entity';

export enum AccessType {
  PUBLIC = 'PUBLIC',
  SUBSCRIBER = 'SUBSCRIBER',
  // PAID = 'PAID',
}

export enum PostType {
  TEXT = 'TEXT',
  MEDIA = 'MEDIA', // image/video/gif gallery
  POLL = 'POLL',
  FILE = 'FILE', 
}

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Index()
  @Column()
  userId: string;

  @Column({ type: 'text', nullable: true })
  caption?: string;

  @Column({ type: 'enum', enum: AccessType, default: AccessType.PUBLIC })
  accessType: AccessType;

  // only required when accessType = PAID
  // @Column({ type: 'int', nullable: true })
  // priceInCents?: number;

  @Column({ type: 'enum', enum: PostType })
  type: PostType;

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
}
