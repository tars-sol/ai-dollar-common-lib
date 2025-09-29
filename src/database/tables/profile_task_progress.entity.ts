import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Task } from './task.entity';
import { ProfileCampaign } from './profile_campaign.entity';
@Entity('profile_task_progress')
@Unique(['userId', 'taskId']) // one progress per user per task
export class ProfileTaskProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Profile;

  @Column()
  userId: string;

  @ManyToOne(() => Task, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'taskId' })
  task: Task;

  @Column()
  taskId: string;
  @ManyToOne(() => ProfileCampaign, (profileCampaign) => profileCampaign.tasks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'campaignId' })
  profileCampaign: ProfileCampaign;

  @Column()
  profileCampaignId: string;

  // @Column({ default: false })
  // isCompletedByUser: boolean;

  @Column({ default: false })
  isMarkedDoneByBrand: boolean;

  @Column({ type: 'text', nullable: true })
  brandComment?: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
