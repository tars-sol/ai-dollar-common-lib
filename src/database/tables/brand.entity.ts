import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Payment } from './payment.entity';
import { Campaign } from './campaign.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
  @OneToMany(() => Campaign, (campaign) => campaign.brand)
  campaigns: Campaign[];

  @Index({ unique: true })
  @Column()
  userId: string;

  @Column({ length: 64 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  logoUrl: string;
  @Column({ type: 'varchar', nullable: true })
  discord: string;
  @Column({ type: 'varchar', nullable: true })
  twitter: string;
  @Column({ type: 'varchar', nullable: true })
  telegram: string;

  //tags for brand
  @Column({ type: 'text', array: true, default: () => "'{}'::text[]" })
  tags: string[];

  @Column({ type: 'numeric', default: 0 })
  campaignCount: number;

  //tokenName
  @Column({ type: 'varchar', nullable: true })
  tokenName: string;

  @Column({ type: 'varchar', nullable: true })
  websiteUrl: string;
  @OneToMany(() => Payment, (payment) => payment.brand)
  payments: Payment[];
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
