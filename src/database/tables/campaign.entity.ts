import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Task } from './task.entity';
import { Payment } from './payment.entity';
export enum CampaignStatus {
  DRAFT = 'DRAFT', // Campaign created but required fields are incomplete
  AWAITING_PAYMENT = 'AWAITING_PAYMENT', // Details complete, Stripe session initiated but payment not received
  FUNDED_PENDING_START = 'FUNDED_PENDING_START', // Fully paid, startDate is in the future
  ACTIVE = 'ACTIVE', // startDate reached, campaign is live
  ENDED_PENDING_PAYOUT = 'ENDED_PENDING_PAYOUT', // endDate passed, payouts not triggered yet
  ENDED_PARTIALLY_PAID = 'ENDED_PARTIALLY_PAID', // Some payouts made, others pending
  ENDED_PAID = 'ENDED_PAID', // All payouts successfully dispatched or refunded
  EXPIRED_UNFUNDED = 'EXPIRED_UNFUNDED', // startDate passed but no payment received
  CANCELLED = 'CANCELLED', // Campaign was cancelled
}

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Brand, (brand) => brand.campaigns, {
    onDelete: 'CASCADE',
    eager: false,
  })
  @JoinColumn({ name: 'brandId' })
  brand: Brand;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column()
  brandId: string;
  @Column({
    type: 'enum',
    enum: CampaignStatus,
    default: CampaignStatus.DRAFT,
  })
  status: CampaignStatus;

  @OneToMany(() => Task, (task) => task.campaign, {
    cascade: true,
  })
  tasks: Task[];
  @Column({ type: 'boolean', default: false })
  isPrivate: boolean;
  @Column('numeric', { precision: 12, scale: 2 })
  amountToInvest: number;
  @Column({ type: 'timestamp' })
  startDate: Date;
  @Column({ type: 'timestamp' })
  endDate: Date;
  @OneToOne(() => Payment, (payment) => payment.campaign)
  payment: Payment;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
