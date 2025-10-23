import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Campaign } from './campaign.entity';
import { ProfileTaskProgress } from './profile_task_progress.entity';
import { Payout } from './payout.entity';

@Entity('profile_campaigns')
@Unique(['profileId', 'campaignId']) // prevent duplicate entries
export class ProfileCampaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Column()
  profileId: string;

  @ManyToOne(() => Campaign, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'campaignId' })
  campaign: Campaign;
  @OneToMany(() => ProfileTaskProgress, (task) => task.profileCampaign, {
    cascade: true,
  })
  tasks: ProfileTaskProgress[];
  @Column()
  campaignId: string;
  @Column({ default: false })
  completed: boolean;
  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date | null;
  @OneToOne(() => Payout, (payout) => payout.profileCampaign, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'payoutId' })
  payout: Payout | null;
  @Column({ type: 'uuid', nullable: true, unique: true })
  payoutId: string | null;
  @Column({default: false})
  rewarded: boolean;
  @Column({ type: 'timestamp', nullable: true })
  rewardedAt: Date | null;

  @CreateDateColumn()
  joinedAt: Date;
}
