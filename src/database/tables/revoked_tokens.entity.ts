import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}

@Entity('revoked_tokens')
export class RevokedToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // JWT ID (preferred unique identifier for a token)
  @Index({ unique: true })
  @Column({ type: 'varchar' })
  jti: string;

  // Optional: store a hash of the token instead of the raw token for security
  @Index({ unique: true })
  @Column({ type: 'text' })
  tokenHash: string ;

  @Index()
  @Column({ type: 'uuid', nullable: true })
  userId: string | null;

  // Token type (e.g., access, refresh)
  @Column({ type: 'enum', enum: TokenType })
  tokenType: TokenType;

  // Original token expiration
  @Column({ type: 'timestamp' })
  expiresAt: Date;

  // When it was revoked
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  revokedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
