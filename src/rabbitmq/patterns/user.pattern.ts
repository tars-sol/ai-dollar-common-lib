export const UserPattern = {
  CREATE: { cmd: 'user.create' } as const,
  UPDATE: { cmd: 'user.update' } as const,
  DELETE: { cmd: 'user.delete' } as const,
};
export type UserPattern = typeof UserPattern[keyof typeof UserPattern];
