import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
} from 'typeorm';

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

  @Column({ type: 'boolean', default: false })
  inPortfolio: boolean;

  @Column({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  deletedAt: Date;

  @Index()
  @Column({ type: 'boolean', default: true })
  typesenseNeedsDelete: boolean;

  @Column({ type: 'int', default: 0 })
  typesenseAttempts: number;

  @Column({ type: 'text', nullable: true })
  typesenseLastError?: string;

  @Column({ type: 'timestamptz', nullable: true })
  typesenseDeletedAt?: Date;

  @Index()
  @Column({ type: 'boolean', default: true })
  qdrantNeedsDelete: boolean;

  @Column({ type: 'int', default: 0 })
  qdrantAttempts: number;

  @Column({ type: 'text', nullable: true })
  qdrantLastError?: string;

  @Column({ type: 'timestamptz', nullable: true })
  qdrantDeletedAt?: Date;
}
