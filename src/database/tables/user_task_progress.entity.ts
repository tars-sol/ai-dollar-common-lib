import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Task } from './task.entity';
@Entity('user_task_progress')
@Unique(['userId', 'taskId']) // one progress per user per task
export class UserTaskProgress {
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

  @Column({ default: false })
  isCompletedByUser: boolean;

  @Column({ default: false })
  isMarkedDoneByBrand: boolean;

  @Column({ type: 'text', nullable: true })
  brandComment?: string;

  @CreateDateColumn()
  updatedAt: Date;
}
