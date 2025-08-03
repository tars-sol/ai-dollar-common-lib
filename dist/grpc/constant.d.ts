export declare const GrpcPackageToken: {
    readonly AUTH: "AUTH_PACKAGE";
    readonly USER: "USER_PACKAGE";
    readonly PAYMENT: "PAYMENT_PACKAGE";
    readonly PROFILE: "PROFILE_PACKAGE";
    readonly BRAND: "BRAND_PACKAGE";
    readonly CAMPAIGN: "CAMPAIGN_PACKAGE";
};
export type GrpcPackageToken = (typeof GrpcPackageToken)[keyof typeof GrpcPackageToken];
export declare const GrpcProtoName: {
    readonly AUTH: "auth";
    readonly USER: "user";
    readonly PAYMENT: "payment";
    readonly PROFILE: "profile";
    readonly BRAND: "brand";
    readonly CAMPAIGN: "campaign";
};
export type GrpcProtoName = (typeof GrpcProtoName)[keyof typeof GrpcProtoName];
