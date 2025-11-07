import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
  Index, ManyToOne, JoinColumn, Check
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity('subscription_tiers')
@Index(['creatorId', 'name'], { unique: true })
@Check(`monthly_price_cents >= 0`)
@Check(`annual_price_cents  >= 0`)
@Check(`access_mask >= 0`)
@Check(`currency ~ '^[A-Za-z]{3,10}$'`)
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
  description?: string | null;

  @Column({ type: 'varchar' })
  stripeProductId: string;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  monthlyStripePriceId: string;

  @Column({ type: 'integer' })
  monthlyPriceCents: number;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  annualStripePriceId: string;

  @Column({ type: 'integer' })
  annualPriceCents: number;

  @Column({ type: 'varchar', length: 10, default: 'usd' })
  currency: string;

  @Column({ type: 'integer', default: 0 })
  accessMask: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
