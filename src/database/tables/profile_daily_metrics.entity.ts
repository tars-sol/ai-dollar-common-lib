import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  Unique,
} from 'typeorm';

@Entity('profile_daily_metrics')
@Unique('u_profile_daily_metrics_profile_date', ['profileId', 'date'])
@Index(['profileId', 'date'])
export class ProfileDailyMetrics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  profileId: string;

  @Column({ type: 'date' })
  date: string; 

  @Column({ type: 'bigint', default: 0 })
  earningsCents: number;

  @Column({ type: 'bigint', default: 0 })
  viewsCount: number;

  @Column({ type: 'bigint', default: 0 })
  followersTotal: number;

  @Column({ type: 'bigint', default: 0 })
  followersDelta: number;

  @Column({ type: 'bigint', default: 0 })
  subsTotal: number;

  @Column({ type: 'bigint', default: 0 })
  subsDelta: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
