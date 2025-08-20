// events/user-event.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
} from 'typeorm';

export enum EventVerb {
  // post lifecycle
  POST_CREATED = 'POST_CREATED',
  POST_UPDATED = 'POST_UPDATED',
  POST_DELETED = 'POST_DELETED',
  POST_VIEWED = 'POST_VIEWED',

  // engagement
  COMMENT_CREATED = 'COMMENT_CREATED',
  COMMENT_UPDATED = 'COMMENT_UPDATED',
  COMMENT_DELETED = 'COMMENT_DELETED',
  LIKE_ADDED = 'LIKE_ADDED',
  LIKE_REMOVED = 'LIKE_REMOVED',

  // social graph
  FOLLOWED = 'FOLLOWED',
  UNFOLLOWED = 'UNFOLLOWED',

  // subscriptions
  SUBSCRIBED = 'SUBSCRIBED',
  UNSUBSCRIBED = 'UNSUBSCRIBED',
}

export enum EntityType {
  PROFILE = 'PROFILE',
  POST = 'POST',
  COMMENT = 'COMMENT',
  LIKE = 'LIKE',
  SUBSCRIPTION = 'SUBSCRIPTION',
  FOLLOW = 'FOLLOW',
  // extend later: FILE, MEDIA, POLL, etc.
}

@Entity('user_events')
@Index('idx_events_feed', ['createdAt', 'id'])
@Index('idx_events_actor', ['actorId', 'createdAt'])
@Index('idx_events_object', ['objectType', 'objectId'])
@Index('idx_events_target', ['targetType', 'targetId'])
@Index('idx_events_post', ['postId', 'createdAt'])
export class UserEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Who performed the action (Profile.id) */
  @Column()
  @Index()
  actorId: string;

  /** The primary thing acted upon (e.g., post liked, post commented) */
  @Column({ type: 'enum', enum: EntityType })
  objectType: EntityType;

  @Column()
  objectId: string;

  /** Optional secondary thing (e.g., follow target profile, subscription creator) */
  @Column({ type: 'enum', enum: EntityType, nullable: true })
  targetType?: EntityType | null;

  @Column({ nullable: true })
  targetId?: string | null;

  /** Normalized post context (helps feeds & analytics) */
  @Column({ nullable: true })
  postId?: string | null;

  /** What happened */
  @Column({ type: 'enum', enum: EventVerb })
  verb: EventVerb;

  /** Idempotency/dedup key (e.g., `${verb}:${actorId}:${objectType}:${objectId}` or webhook id) */
  @Column({ nullable: true, unique: true })
  dedupeKey?: string | null;

  @CreateDateColumn()
  createdAt: Date;
}
