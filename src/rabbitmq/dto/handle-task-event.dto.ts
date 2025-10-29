import { TaskAction } from '../../database';
export interface EventDto {
  correlationId: string;
}
export interface TaskFollowEventDto extends EventDto {
  action: TaskAction.FOLLOW_PROFILE | TaskAction.FOLLOW_BRAND;
  targetId: string;
  followerId: string;
  followerRoleId: string;
}

export type TaskUnfollowEventDto = TaskFollowEventDto;

export interface TaskSubscribeEventDto extends EventDto {
  action: TaskAction.SUBSCRIBE_PROFILE;
  targetId: string;
  subscriberId: string;
  subscriberRoleId: string;
}

export type TaskUnsubscribeEventDto = TaskSubscribeEventDto;

export interface TaskLikeEventDto extends EventDto {
  action: TaskAction.LIKE_POST;
  targetId: string;
  userId: string;
  roleId: string;
}

export type TaskUnlikeEventDto = TaskLikeEventDto;

export interface TaskCommentEventDto extends EventDto {
  action: TaskAction.COMMENT_ON_POST;
  targetId: string;
  userId: string;
  roleId: string;
  commentId: string;
}
export type TaskDeleteCommentEventDto = TaskCommentEventDto;

export interface TaskMentionPostEventDto extends EventDto {
  action:
    | TaskAction.CREATE_POST_ABOUT_PROFILE
    | TaskAction.CREATE_POST_ABOUT_BRAND;
  targetId: string;
  userId: string;
  roleId: string;
  postId: string;
}
export type TaskDeleteMentionPostEventDto = TaskMentionPostEventDto;

export interface TaskMentionCommentEventDto extends EventDto {
  action:
    | TaskAction.MENTION_PROFILE_IN_COMMENTS
    | TaskAction.MENTION_BRAND_IN_COMMENTS;
  targetId: string;
  userId: string;
  roleId: string;
  postId: string;
  commentId: string;
}
export type TaskDeleteMentionCommentEventDto = TaskMentionCommentEventDto;
