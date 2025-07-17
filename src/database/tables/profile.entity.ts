import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    Index,
} from 'typeorm';
import { User } from './user.entity';

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 32 })
    username: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    name: string;

    @Column({ type: 'varchar', nullable: true })
    avatarUrl: string;

    @Column({ type: 'text', nullable: true })
    bio: string;

    @Column({ nullable: true })
    websiteUrl: string;

    @Column({ nullable: true })
    twitter: string;

    @Column({ nullable: true })
    github: string;

    @Column({ nullable: true })
    youtube: string;

    @Column({ nullable: true })
    linkedin: string;

    @Column({ type: 'boolean', default: false })
    isVerified: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
