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

export const GrpcProtoServiceName = {
  AUTH_SERVICE: 'AuthService',
  USER_SERVICE: 'UserService',
  PAYMENT_SERVICE: 'PaymentService',
  PROFILE_SERVICE: 'ProfileService',
  BRAND_SERVICE: 'BrandService',
  CAMPAIGN_SERVICE: 'CampaignService',
} as const;

export type GrpcProtoServiceName = (typeof GrpcProtoServiceName)[keyof typeof GrpcProtoServiceName];