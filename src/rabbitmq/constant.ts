export const RMQ_CLIENT = {
  USER_CLIENT: 'USER_CLIENT',
  POST_CLIENT: 'POST_CLIENT',
};
export type RMQ_CLIENT = (typeof RMQ_CLIENT)[keyof typeof RMQ_CLIENT];
