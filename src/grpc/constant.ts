
export const GrpcPackageToken = {
  AUTH: 'AUTH_PACKAGE',
  USER: 'USER_PACKAGE',
  PAYMENT: 'PAYMENT_PACKAGE',
  PROFILE: 'PROFILE_PACKAGE'
} as const;
export type GrpcPackageToken = typeof GrpcPackageToken[keyof typeof GrpcPackageToken];

export const GrpcProtoName = {
  AUTH: 'auth',
  USER: 'user',
  PAYMENT: 'payment',
  PROFILE: 'profile'
} as const;
export type GrpcProtoName = typeof GrpcProtoName[keyof typeof GrpcProtoName];