export const SubscriptionPattern = {
  PROFILE_CREATED: { cmd: 'profile.created' } as const,
};
export type SubscriptionPattern = typeof SubscriptionPattern[keyof typeof SubscriptionPattern];
