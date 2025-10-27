import { TaskAction } from '../../database';
export interface TaskFollowEventDto {
    action: TaskAction.FOLLOW_PROFILE | TaskAction.FOLLOW_BRAND;
    targetId: string;
    followerId: string;
    followerRoleId: string;
}
export type TaskUnfollowEventDto = TaskFollowEventDto;
export interface TaskSubscribeEventDto {
    action: TaskAction.SUBSCRIBE_PROFILE;
    targetId: string;
    subscriberId: string;
    subscriberRoleId: string;
}
export type TaskUnsubscribeEventDto = TaskSubscribeEventDto;
export interface TaskLikeEventDto {
    action: TaskAction.LIKE_POST;
    targetId: string;
    userId: string;
    roleId: string;
}
export type TaskUnlikeEventDto = TaskLikeEventDto;
export interface TaskCommentEventDto {
    action: TaskAction.COMMENT_ON_POST;
    targetId: string;
    userId: string;
    roleId: string;
    commentId: string;
}
export type TaskDeleteCommentEventDto = TaskCommentEventDto;
export interface TaskMentionPostEventDto {
    action: TaskAction.CREATE_POST_ABOUT_PROFILE | TaskAction.CREATE_POST_ABOUT_BRAND;
    targetId: string;
    userId: string;
    roleId: string;
    postId: string;
}
export type TaskDeleteMentionPostEventDto = TaskMentionPostEventDto;
export interface TaskMentionCommentEventDto {
    action: TaskAction.MENTION_PROFILE_IN_COMMENTS | TaskAction.MENTION_BRAND_IN_COMMENTS;
    targetId: string;
    userId: string;
    roleId: string;
    postId: string;
    commentId: string;
}
export type TaskDeleteMentionCommentEventDto = TaskMentionCommentEventDto;
