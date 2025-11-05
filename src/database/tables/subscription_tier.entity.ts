import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
  Index, ManyToOne, JoinColumn, Check
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity('subscription_tiers')
@Index(['creatorId', 'name'], { unique: true })
@Check(`(monthly_price_cents IS NOT NULL AND monthly_price_cents >= 0) OR monthly_price_cents IS NULL`)
@Check(`(annual_price_cents  IS NOT NULL AND annual_price_cents  >= 0) OR annual_price_cents  IS NULL`)
@Check(`entitlements_mask >= 0`)
@Check(`currency ~ '^[A-Za-z]{3,10}$'`)
@Check(`(monthly_stripe_price_id IS NOT NULL OR annual_stripe_price_id IS NOT NULL)`)
export class SubscriptionTier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  creatorId: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creatorId' })
  creator: Profile;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', nullable: true })
  stripeProductId?: string; 

  // Monthly
  @Index()
  @Column({ type: 'varchar', nullable: true, unique: true })
  monthlyStripePriceId?: string;
  @Column({ type: 'bigint', nullable: true })
  monthlyPriceCents?: number;

  // Annual
  @Index()
  @Column({ type: 'varchar', nullable: true, unique: true })
  annualStripePriceId?: string;
  @Column({ type: 'bigint', nullable: true })
  annualPriceCents?: number;

  @Column({ type: 'varchar', length: 10, default: 'usd' })
  currency: string;

  @Column({ type: 'int', default: 1 })
  accessMask: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
