import {
  Column,
  CreateDateColumn,
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

export interface EvidenceItem {
  eventId: string;
  eventType: string;
  targetId?: string;
  postId?: string;
  commentId?: string;
  snippet?: string;
  at: string; // ISO timestamp
}

// profile_task_progress.entity.ts
export enum ProgressComputedBy {
  SERVER = 'SERVER',
  BRAND = 'BRAND',
  MIXED = 'MIXED',
}

@Entity('profile_task_progress')
@Unique(['profileId', 'taskId']) // 1 progress per profile per task
export class ProfileTaskProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Column()
  profileId: string;

  @ManyToOne(() => Task, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'taskId' })
  task: Task;

  @Column()
  taskId: string;

  @ManyToOne(() => ProfileCampaign, (pc) => pc.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profileCampaignId' })
  profileCampaign: ProfileCampaign;

  @Column()
  profileCampaignId: string;

  // NEW: server-tracked count (e.g., comments posted so far)
  @Column({ type: 'integer', default: 0 })
  progressCount: number;

  // NEW: completion marker + who completed it
  @Column({ type: 'boolean', default: false })
  isCompletedByServer: boolean;

  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date | null;

  @Column({
    type: 'enum',
    enum: ProgressComputedBy,
    default: ProgressComputedBy.SERVER,
  })
  computedBy: ProgressComputedBy;

  // Keep your manual override flags
  @Column({ default: false })
  isMarkedDoneByBrand: boolean;

  @Column({ type: 'text', nullable: true })
  brandComment?: string;

  // NEW: store qualifying events to prove completion (idempotency too)
  // Each evidence item: { eventId, eventType, targetId?, postId?, commentId?, snippet?, at }
  @Column({ type: 'jsonb', default: () => `'[]'` })
  evidence: EvidenceItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
