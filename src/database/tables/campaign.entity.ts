import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Task } from './task.entity';
import { Payment } from './payment.entity';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Brand, (brand) => brand.campaigns, {
    onDelete: 'CASCADE',
    eager: false,
  })
  @JoinColumn({ name: 'brandId' })
  brand: Brand;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column()
  brandId: string;

  @OneToMany(() => Task, (task) => task.campaign, {
    cascade: true,
  })
  tasks: Task[];

  @Column('numeric', { precision: 12, scale: 2 })
  amountToInvest: number;
  @Column({ type: 'timestamp' })
  startDate: Date;
  @Column({ type: 'timestamp' })
  endDate: Date;
  @OneToOne(() => Payment, (payment) => payment.campaign)
  payment: Payment;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
