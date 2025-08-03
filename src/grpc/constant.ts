export const GrpcPackageToken = {
  AUTH: 'AUTH_PACKAGE',
  USER: 'USER_PACKAGE',
  PAYMENT: 'PAYMENT_PACKAGE',
  PROFILE: 'PROFILE_PACKAGE',
  BRAND: 'BRAND_PACKAGE',
  CAMPAIGN: 'CAMPAIGN_PACKAGE',
} as const;
export type GrpcPackageToken =
  (typeof GrpcPackageToken)[keyof typeof GrpcPackageToken];

export const GrpcProtoName = {
  AUTH: 'auth',
  USER: 'user',
  PAYMENT: 'payment',
  PROFILE: 'profile',
  BRAND: 'brand',
  CAMPAIGN: 'campaign',
} as const;
export type GrpcProtoName = (typeof GrpcProtoName)[keyof typeof GrpcProtoName];
