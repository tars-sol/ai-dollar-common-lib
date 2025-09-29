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

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 32 })
  username: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  avatarUrl: string;

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

  @Index('idx_profiles_fts', { synchronize: false })
  @Column({
    type: 'tsvector',
    asExpression: `
    setweight(to_tsvector('simple_unaccent', coalesce(username, '')), 'A') ||
    setweight(to_tsvector('english_unaccent', coalesce(name, '')), 'B')
  `,
    generatedType: 'STORED',
    nullable: true,
    select: false,
  })
  fts!: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
