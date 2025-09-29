import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Campaign } from './campaign.entity';
import { ProfileTaskProgress } from './profile_task_progress.entity';

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

  @CreateDateColumn()
  joinedAt: Date;
}
