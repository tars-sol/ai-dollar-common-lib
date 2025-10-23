import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Campaign } from './campaign.entity';
import { Profile } from './profile.entity';
import { ProfileCampaign } from './profile_campaign.entity';
export enum PayoutStatus {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
@Entity({ name: 'payouts' })
export class Payout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
    enum: PayoutStatus,
    default: PayoutStatus.PENDING,
  })
  status: PayoutStatus;
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
  @JoinColumn({ name: 'profileId' })
  profile: Profile;
  @Column()
  profileId: string;
  @OneToOne(() => ProfileCampaign, (pc) => pc.payout, {
    nullable: true,
  })
  profileCampaign: ProfileCampaign | null;
  @Column({ nullable: true })
  paidOn: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
