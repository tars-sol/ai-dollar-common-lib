import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity';
import { SubscriptionTier } from './subscription_tier.entity';

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  EXPIRED = 'EXPIRED',
}

export enum SubscriptionBillingInterval {
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL',
}

@Entity('profile_subscriptions')
@Unique('u_subscriber_creator', ['subscriberId', 'creatorId'])
@Index(['subscriberId'])
@Index(['creatorId'])
@Index(['tierId'])
export class ProfileSubscription {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ type: 'uuid' })
  subscriberId: string;
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'subscriberId' })
  subscriber: User;

  @Column({ type: 'uuid' })
  creatorId: string;
  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creatorId' })
  creator: Profile;

  @Column({ type: 'uuid', nullable: true })
  tierId: string | null;
  @ManyToOne(() => SubscriptionTier, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'tierId' })
  tier?: SubscriptionTier | null;

  @Column({ type: 'timestamptz', nullable: true })
  currentPeriodStart: Date | null;

  @Index()
  @Column({ type: 'timestamptz', nullable: true })
  currentPeriodEnd: Date | null;

  @Column({ type: 'boolean', default: false })
  cancelAtPeriodEnd: boolean;

  @Column({
    type: 'enum',
    enum: SubscriptionStatus,
    default: SubscriptionStatus.ACTIVE,
  })
  status: SubscriptionStatus;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Index()
  stripeSubscriptionId: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Index()
  stripeCustomerId: string | null;

  @Column({
    type: 'enum',
    enum: SubscriptionBillingInterval,
    nullable: true,
  })
  billingInterval: SubscriptionBillingInterval | null;

  @Column({ type: 'integer', nullable: true })
  billingPriceCents: number | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  billingCurrency: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Index()
  lastInvoiceId: string | null;

  @Column({ type: 'timestamptz', nullable: true })
  lastPaidAt: Date | null;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
