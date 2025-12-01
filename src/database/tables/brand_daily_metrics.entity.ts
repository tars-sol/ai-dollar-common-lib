import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  Unique,
} from 'typeorm';

@Entity('brand_daily_metrics')
@Unique('u_brand_daily_metrics_brand_date', ['brandId', 'date'])
@Index(['brandId', 'date'])
export class BrandDailyMetrics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  brandId: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'bigint', default: 0 })
  payoutsCents: number;

  @Column({ type: 'bigint', default: 0 })
  followersTotal: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
