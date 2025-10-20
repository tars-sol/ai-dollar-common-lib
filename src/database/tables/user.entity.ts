import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

export enum Role {
  PROFILE = 'profile',
  BRAND = 'brand',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true, where: 'email IS NOT NULL' })
  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Index({ unique: true, where: '"walletAddress" IS NOT NULL' })
  @Column({ type: 'varchar', nullable: true })
  walletAddress: string;

  @Column({ type: 'varchar', length: 32, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name: string ;

  @Index('idx_users_fts', { synchronize: false })
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

  @Column({ type: 'varchar', nullable: true })
  walletNonce: string;

  @Column({ type: 'text', nullable: true })
  refreshToken: string;

  @Column({ type: 'boolean', default: false })
  isBanned: boolean;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ type: 'enum', enum: Role, nullable: true })
  role: Role;

  @Column({ type: 'int', default: 0 })
  followersCount: number;

  @Column({ type: 'int', default: 0 })
  followingCount: number;

  @Column({ type: 'int', default: 0 })
  subscriptionsCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
