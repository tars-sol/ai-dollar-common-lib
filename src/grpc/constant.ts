export const GrpcPackageToken = {
  AUTH: 'AUTH_PACKAGE',
  USER: 'USER_PACKAGE',
  PAYMENT: 'PAYMENT_PACKAGE',
  PROFILE: 'PROFILE_PACKAGE',
  BRAND: 'BRAND_PACKAGE',
  CAMPAIGN: 'CAMPAIGN_PACKAGE',
  POST: 'POST_PACKAGE',
  SUBSCRIPTION: 'SUBSCRIPTION_PACKAGE',
  METRIC: 'METRIC_PACKAGE'

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
  POST: 'post',
  SUBSCRIPTION: 'subscription',
  METRIC: 'metric'
} as const;

export type GrpcProtoName = (typeof GrpcProtoName)[keyof typeof GrpcProtoName];

export const GrpcProtoServiceName = {
  AUTH_SERVICE: 'AuthService',
  USER_SERVICE: 'UserService',
  PAYMENT_SERVICE: 'PaymentService',
  PROFILE_SERVICE: 'ProfileService',
  BRAND_SERVICE: 'BrandService',
  CAMPAIGN_SERVICE: 'CampaignService',
  POST_SERVICE: 'PostService',
  SUBSCRIPTION_SERVICE: 'SubscriptionService',
  METRIC_SERVICE: 'MetricService'
} as const;

export type GrpcProtoServiceName =
  (typeof GrpcProtoServiceName)[keyof typeof GrpcProtoServiceName];

export function resolveGrpcProtoPath(protoName: GrpcProtoName): string {
  return `ai-dollar-common-lib/src/grpc/proto/${protoName}.proto`;
}
