// payment.entity.ts (additions marked)
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Campaign } from './campaign.entity';

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  REFUND_INITIATED = 'refund_initiated',
  REFUNDED = 'refunded',
  REFUND_FAILED = 'refund_failed',
}

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() clientSecretKey: string;

  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @Column({ length: 10 })
  currency: string;

  @Column({ unique: true })
  transactionId: string; // Prefer this to be the PaymentIntent id (pi_...)

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @ManyToOne(() => Brand, (brand) => brand.payments, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'brandId' })
  brand: Brand;

  @Column({ nullable: false })
  fees: number;

  @Column()
  brandId: string;

  @ManyToOne(() => Campaign, (campaign) => campaign.payment, {
    onDelete: 'CASCADE',
    eager: false,
  })
  @JoinColumn({ name: 'campaignId' })
  campaign: Campaign;

  @Column({ nullable: true })
  campaignId: string;

  @Column({ nullable: true })
  paidOn: Date;

  /** QUICK FLAGS for full refund visibility */
  @Column({ default: false })
  isRefunded: boolean;

  /** Convenience: store Stripe refund id for fast reads */
  @Column({ nullable: true })
  refundStripeId: string;

  @Column({ type: 'timestamptz', nullable: true })
  refundedAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn() 
  updatedAt: Date;
}
