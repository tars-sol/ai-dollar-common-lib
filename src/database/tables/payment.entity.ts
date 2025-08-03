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
}
@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clientSecretKey: string;

  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @Column({ length: 10 })
  currency: string;

  @Column({ unique: true })
  transactionId: string;

  //   @Column({ nullable: true })
  //   campaignId: string;
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


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
