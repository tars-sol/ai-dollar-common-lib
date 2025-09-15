export declare enum Role {
    PROFILE = "profile",
    BRAND = "brand"
}
export declare class User {
    id: string;
    email: string;
    password: string;
    walletAddress: string;
    walletNonce: string;
    refreshToken: string;
    isBanned: boolean;
    isDeleted: boolean;
    role: Role;
    followersCount: number;
    followingCount: number;
    subscriptionsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
