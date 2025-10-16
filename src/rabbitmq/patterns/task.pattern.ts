export const TaskPattern = {
  FOLLOW: { cmd: 'task.follow' } as const,
  LIKE: { cmd: 'task.like' } as const,
  COMMENT: { cmd: 'task.comment' } as const,
  SUBSCRIBE: { cmd: 'task.subscribe' } as const,
  POST: { cmd: 'task.post' } as const,
};
export type TaskPattern = typeof TaskPattern[keyof typeof TaskPattern];
