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
import { Profile } from './profile.entity';

@Entity('profile_follows')
@Unique(['followerId', 'targetId']) // one follow per pair
@Check(`"followerId" <> "targetId"`) // no self-follow
export class ProfileFollow {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Index()
  @Column()
  followerId: string; // Profile.id of follower
  @Index()
  @Column()
  targetId: string; // Profile.id of followed account

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'followerId' })
  follower: Profile;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'targetId' })
  target: Profile;

  @CreateDateColumn()
  createdAt: Date;
}
