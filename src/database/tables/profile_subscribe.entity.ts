import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

// profiles/entities/profile-subscription.entity.ts
export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  EXPIRED = 'EXPIRED',
}

@Entity('profile_subscriptions')
@Index(['subscriberId', 'creatorId'])
@Check(`"subscriberId" <> "creatorId"`) // no self-subscribe
export class ProfileSubscription {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Index()
  @Column()
  subscriberId: string; // Profile.id who pays
  @Index()
  @Column()
  creatorId: string; // Profile.id being supported

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'subscriberId' })
  subscriber: Profile;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creatorId' })
  creator: Profile;

  @Column({
    type: 'enum',
    enum: SubscriptionStatus,
    default: SubscriptionStatus.ACTIVE,
  })
  status: SubscriptionStatus;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
