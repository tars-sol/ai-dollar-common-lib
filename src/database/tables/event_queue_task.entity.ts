import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from 'typeorm';

@Entity('event_queue_task')
export class EventQueueTask {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Index()
  @Column({ type: 'text' })
  routingKey: string;

  @Index()
  @Column({ type: 'text', nullable: true })
  correlationId?: string | null;

  @Column({ type: 'jsonb' })
  payload: Record<string, unknown>;

  @CreateDateColumn({ type: 'timestamptz' })
  occurredAt: Date;

  @Index()
  @Column({ type: 'timestamptz', nullable: true })
  publishedAt?: Date | null;

  @Column({ type: 'int', default: 0 })
  publishAttempts: number;

  @Index()
  @Column({ type: 'timestamptz', nullable: true })
  nextAttemptAt?: Date | null;
  @Column({ type: 'boolean', default: false })
  isSuccessful: boolean;
  @Column({ type: 'text', nullable: true })
  failureReason: string | null;

  @Index()
  @Column({ type: 'timestamptz', nullable: true })
  successfulAt?: Date | null;
}
