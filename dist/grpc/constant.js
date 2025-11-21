"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcProtoServiceName = exports.GrpcProtoName = exports.GrpcPackageToken = void 0;
exports.resolveGrpcProtoPath = resolveGrpcProtoPath;
exports.GrpcPackageToken = {
    AUTH: 'AUTH_PACKAGE',
    USER: 'USER_PACKAGE',
    PAYMENT: 'PAYMENT_PACKAGE',
    PROFILE: 'PROFILE_PACKAGE',
    BRAND: 'BRAND_PACKAGE',
    CAMPAIGN: 'CAMPAIGN_PACKAGE',
    POST: 'POST_PACKAGE',
    SUBSCRIPTION: 'SUBSCRIPTION_PACKAGE',
    METRIC: 'METRIC_PACKAGE'
};
exports.GrpcProtoName = {
    AUTH: 'auth',
    USER: 'user',
    PAYMENT: 'payment',
    PROFILE: 'profile',
    BRAND: 'brand',
    CAMPAIGN: 'campaign',
    POST: 'post',
    SUBSCRIPTION: 'subscription',
    METRIC: 'metric'
};
exports.GrpcProtoServiceName = {
    AUTH_SERVICE: 'AuthService',
    USER_SERVICE: 'UserService',
    PAYMENT_SERVICE: 'PaymentService',
    PROFILE_SERVICE: 'ProfileService',
    BRAND_SERVICE: 'BrandService',
    CAMPAIGN_SERVICE: 'CampaignService',
    POST_SERVICE: 'PostService',
    SUBSCRIPTION_SERVICE: 'SubscriptionService',
    METRIC_SERVICE: 'MetricService'
};
function resolveGrpcProtoPath(protoName) {
    return `ai-dollar-common-lib/src/grpc/proto/${protoName}.proto`;
}
//# sourceMappingURL=constant.js.map