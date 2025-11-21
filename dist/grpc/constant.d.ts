export declare const GrpcPackageToken: {
    readonly AUTH: "AUTH_PACKAGE";
    readonly USER: "USER_PACKAGE";
    readonly PAYMENT: "PAYMENT_PACKAGE";
    readonly PROFILE: "PROFILE_PACKAGE";
    readonly BRAND: "BRAND_PACKAGE";
    readonly CAMPAIGN: "CAMPAIGN_PACKAGE";
    readonly POST: "POST_PACKAGE";
    readonly SUBSCRIPTION: "SUBSCRIPTION_PACKAGE";
    readonly METRIC: "METRIC_PACKAGE";
};
export type GrpcPackageToken = (typeof GrpcPackageToken)[keyof typeof GrpcPackageToken];
export declare const GrpcProtoName: {
    readonly AUTH: "auth";
    readonly USER: "user";
    readonly PAYMENT: "payment";
    readonly PROFILE: "profile";
    readonly BRAND: "brand";
    readonly CAMPAIGN: "campaign";
    readonly POST: "post";
    readonly SUBSCRIPTION: "subscription";
    readonly METRIC: "metric";
};
export type GrpcProtoName = (typeof GrpcProtoName)[keyof typeof GrpcProtoName];
export declare const GrpcProtoServiceName: {
    readonly AUTH_SERVICE: "AuthService";
    readonly USER_SERVICE: "UserService";
    readonly PAYMENT_SERVICE: "PaymentService";
    readonly PROFILE_SERVICE: "ProfileService";
    readonly BRAND_SERVICE: "BrandService";
    readonly CAMPAIGN_SERVICE: "CampaignService";
    readonly POST_SERVICE: "PostService";
    readonly SUBSCRIPTION_SERVICE: "SubscriptionService";
    readonly METRIC_SERVICE: "MetricService";
};
export type GrpcProtoServiceName = (typeof GrpcProtoServiceName)[keyof typeof GrpcProtoServiceName];
export declare function resolveGrpcProtoPath(protoName: GrpcProtoName): string;
