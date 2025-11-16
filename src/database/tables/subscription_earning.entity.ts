import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
  Index, ManyToOne, JoinColumn
} from 'typeorm';
import { ProfileSubscription } from './profile_subscribe.entity';

export enum SubscriptionEarningStatus {
  PENDING = 'PENDING',
  AVAILABLE = 'AVAILABLE',
  WITHHELD = 'WITHHELD',
  TRANSFERRED = 'TRANSFERRED',
  REFUNDED = 'REFUNDED',
  REVERSED = 'REVERSED',
  CHARGEBACK = 'CHARGEBACK',
  TRANSFER_FAILED = 'TRANSFER_FAILED'
}

@Entity('subscription_earnings')
export class SubscriptionEarning {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  subscriptionId: string;

  @ManyToOne(() => ProfileSubscription, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'subscriptionId' })
  subscription: ProfileSubscription;

  @Column({ type: 'bigint' })
  amountCents: number;

  @Column({ type: 'varchar', length: 10, default: 'usd' })
  currency: string;

  @Index()
  @Column({ type: 'timestamptz' })
  availableAt: Date;

  @Index()
  @Column({ type: 'enum', enum: SubscriptionEarningStatus, default: SubscriptionEarningStatus.PENDING })
  status: SubscriptionEarningStatus;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Index({ unique: true, where: `"stripeInvoiceId" IS NOT NULL` })
  stripeInvoiceId: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Index()
  stripePaymentIntentId: string | null;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
