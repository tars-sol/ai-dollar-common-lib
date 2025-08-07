import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum AccessType {
  PUBLIC = 'PUBLIC',
  SUBSCRIBER = 'SUBSCRIBER',
  PAID = 'PAID',
}

export enum FileType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CODE = 'CODE',
  OTHER = 'OTHER',
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
  caption: string;

  @Column({ type: 'enum', enum: AccessType, default: AccessType.PUBLIC })
  accessType: AccessType;

  @Column({ type: 'int', nullable: true })
  priceInCents?: number;

  @Column()
  s3Key: string;

  @Column({ type: 'enum', enum: FileType })
  fileType: FileType;

  @Column({ nullable: true })
  originalFileName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
