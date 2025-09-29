import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'connected_Accounts' })
export class ConnectedAccounts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  accountId: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  isActive: boolean;

  @OneToOne(() => Profile, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  profile: Profile;

  @Column({ type: 'varchar' })
  profileId: string;

  @Column()
  onBoardingUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
