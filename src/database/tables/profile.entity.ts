import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from './user.entity';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Column()
  @Index({ unique: true })
  userId: string;

  @Column({ type: 'varchar', nullable: true })
  avatarUrl: string;

  @Column({ type: 'varchar', nullable: true })
  bannerUrl: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  websiteUrl: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  youtube: string;

  @Column({ nullable: true })
  telegram: string;

  @Column({ nullable: true })
  discord: string;

  @Column({ nullable: true })
  tiktok: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'int', default: 0 })
  subscribersCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
