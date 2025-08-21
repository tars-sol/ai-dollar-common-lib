import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Post } from "./post.entity";
import { Profile } from "./profile.entity";

// entities/post-like.entity.ts
@Entity('post_likes')
@Unique(['postId', 'profileId'])
export class PostLike {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  @JoinColumn() post: Post;

  @Index()
  @Column() postId: string;

  @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn() profile: Profile;

  @Index()
  @Column() profileId: string;

  @CreateDateColumn() createdAt: Date;
}
