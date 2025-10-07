import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Campaign } from './campaign.entity';
export enum TaskType {
  IN_APP = 'IN_APP',
  OFF_APP = 'OFF_APP',
  ON_CHAIN = 'ON_CHAIN',
}
// task.entity.ts
export enum TaskAction {
  LIKE_POST = 'LIKE_POST',
  COMMENT_ON_POST = 'COMMENT_ON_POST',
  FOLLOW_PROFILE = 'FOLLOW_PROFILE',
  FOLLOW_BRAND = 'FOLLOW_BRAND',
  SUBSCRIBE_PROFILE = 'SUBSCRIBE_PROFILE',
  CREATE_POST_ABOUT_PROFILE = 'CREATE_POST_ABOUT_PROFILE',
  CREATE_POST_ABOUT_BRAND = 'CREATE_POST_ABOUT_BRAND',
  MENTION_PROFILE_IN_COMMENTS = 'MENTION_PROFILE_IN_COMMENTS',
  MENTION_BRAND_IN_COMMENTS = 'MENTION_BRAND_IN_COMMENTS',
}

export type TaskRule = {
  action: TaskAction;

  // Which entities count toward the task.
  // Use ids you already have: profileId, brandId, postId
  targets?: Array<{
    targetType: 'POST' | 'PROFILE' | 'BRAND';
    targetId: string;
  }>;

  // How many total qualifying actions are required.
  // (e.g., “Post N comments”, “Follow 3 of these 10 creators”)
  countRequired: number;

  // Optional: interpret targets as “anyOf” vs “allOf”
  // - "anyOf" => any target counts, sum to countRequired
  // - "allOf" => every listed target must be hit at least once
  mode?: 'anyOf' | 'allOf';

  // Optional campaign-time filters
  window?: { from?: string; to?: string }; // ISO; default campaign start/end

  // Optional content guards for posts/comments:
  content?: {
    // set if “Make N posts about brand/creator” must include a textual @mention
    requireMention?: boolean;
    // set if an attached media is required, etc.
    requireMedia?: boolean;
    minChars?: number;
  };
};

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Campaign, (campaign) => campaign.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'campaignId' })
  campaign: Campaign;

  @Column()
  campaignId: string;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: TaskType })
  type: TaskType; // keep your existing IN_APP / OFF_APP / ON_CHAIN

  @Column({ type: 'text' })
  description: string;

  // NEW: precise machine-understandable rule
  @Column({ type: 'jsonb' })
  rule: TaskRule;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

