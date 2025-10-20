export const RmqQueue = {
  USER: 'user_queue',
  TASK: 'task_queue',
} as const;
export type RmqQueue = typeof RmqQueue[keyof typeof RmqQueue];