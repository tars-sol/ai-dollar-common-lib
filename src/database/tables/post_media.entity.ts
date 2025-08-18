import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';

export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  GIF = 'GIF',
}

@Entity('post_media')
export class PostMedia {
  @PrimaryGeneratedColumn('uuid') id: string;

  @OneToOne(() => Post, (post) => post.media, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post;

  @Index()
  @Column()
  postId: string;

  @Column({ type: 'enum', enum: MediaType })
  mediaType: MediaType;

  // storage
  @Column()
  s3Key: string;
  @Column()
  originalFileName: string;
  @Column({ type: 'text' })
  mimeType: string;
  // video-only (optional)
 
  @Column({ type: 'int', nullable: true })
  durationSec?: number;
 
}
