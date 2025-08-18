import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
export enum FileType {
  PDF = 'PDF',
  CSV = 'CSV',
  ZIP = 'ZIP',
  JSON = 'JSON',
  TXT = 'TXT',
}
@Entity('post_files')
export class PostFile {
  @PrimaryGeneratedColumn('uuid') id: string;
  @OneToOne(() => Post, (post) => post.file, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post;

  @Index()
  @Column()
  postId: string;

  @Column()
  s3Key: string;
  @Column()
  originalFileName: string;
  @Column({ type: 'enum', enum: FileType })
  fileType: FileType;
  @Column({ type: 'int', nullable: true })
  sizeInBytes?: number;
  @Column()
  mimeType: string;
  @Column({ type: 'int', default: 0 })
  sortOrder: number;
}
