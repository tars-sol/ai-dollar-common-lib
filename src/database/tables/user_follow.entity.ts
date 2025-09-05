// profiles/entities/profile-follow.entity.ts
import {
  Check,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
  Unique,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_follows')
@Unique(['followerId', 'followingId']) // one follow per pair
@Check(`"followerId" <> "followingId"`) // no self-follow
export class UserFollow {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Index()
  @Column()
  followerId: string; // User.id of follower
  @Index()
  @Column()
  followingId: string; // User.id of followed account

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'followerId' })
  follower: User;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'followingId' })
  following: User;

  @CreateDateColumn()
  createdAt: Date;
}
