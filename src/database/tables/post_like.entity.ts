import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

// entities/post-like.entity.ts
@Entity('post_likes')
@Unique(['postId', 'userId'])
export class PostLike {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  @JoinColumn() post: Post;

  @Index()
  @Column() postId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn() user: User;

  @Index()
  @Column() userId: string;

  @CreateDateColumn() createdAt: Date;
}
