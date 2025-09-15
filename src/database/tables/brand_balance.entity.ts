import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Brand } from './brand.entity';

@Entity('brand_balances')
export class BrandBalance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Brand, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  brand: Brand;

  @Column({ type: 'varchar' })
  brandId: string;

  @Column({ type: 'numeric', default: 0 })
  available: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
