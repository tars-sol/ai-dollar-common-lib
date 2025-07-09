export const RmqQueue = {
  USER: 'user_queue',
} as const;
export type RmqQueue = typeof RmqQueue[keyof typeof RmqQueue];