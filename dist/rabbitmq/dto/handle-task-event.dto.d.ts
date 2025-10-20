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
