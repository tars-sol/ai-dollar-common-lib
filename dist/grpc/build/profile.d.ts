import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "profile";
export interface SubscribeRequest {
    targetId: string;
    subscribe: boolean;
    roleId: string;
    userId: string;
    role: string;
}
export interface ProfileResponse {
    id: string;
    userId: string;
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    facebook: string;
    youtube: string;
    discord: string;
    telegram: string;
    tiktok: string;
    instagram: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    jwtToken?: string | undefined;
    isFollowing?: boolean | undefined;
    isSubscribed?: boolean | undefined;
    refreshToken?: string | undefined;
    email?: string | undefined;
    followersCount: string;
    followingCount: string;
    subscribersCount: string;
    subscriptionsCount: string;
    bannerUrl: string;
}
export interface CreateProfileRequest {
    userId: string;
    avatarUrl?: string | undefined;
    bio?: string | undefined;
    websiteUrl?: string | undefined;
    twitter?: string | undefined;
    facebook?: string | undefined;
    youtube?: string | undefined;
    tiktok?: string | undefined;
    instagram?: string | undefined;
    discord?: string | undefined;
    telegram?: string | undefined;
    bannerUrl?: string | undefined;
}
export interface UpdateProfileRequest {
    userId: string;
    username?: string | undefined;
    name?: string | undefined;
    avatarUrl?: string | undefined;
    bio?: string | undefined;
    websiteUrl?: string | undefined;
    twitter?: string | undefined;
    facebook?: string | undefined;
    discord?: string | undefined;
    telegram?: string | undefined;
    youtube?: string | undefined;
    tiktok?: string | undefined;
    instagram?: string | undefined;
    bannerUrl?: string | undefined;
}
export interface GetProfileByIdRequest {
    isPrivate: boolean;
    profileId: string;
    roleId: string;
    userId: string;
    role: string;
}
export interface SuccessResponse {
    success: boolean;
}
export interface SearchProfilesRequest {
    q: string;
    page: number;
    limit: number;
    role: string;
    roleId: string;
}
export interface ProfileSearchItem {
    id: string;
    username: string;
    name: string;
    avatarUrl: string;
    createdAt: string;
    score: number;
}
export interface SearchProfilesResponse {
    results: ProfileSearchItem[];
    total: number;
}
export interface TrendingProfilesRequest {
    pageNumber: number;
    role: string;
    roleId: string;
}
export interface TrendingProfileItem {
    profileId: string;
    userId: string;
    username: string;
    name: string;
    avatarUrl: string;
}
export interface TrendingProfilesResponse {
    profiles: TrendingProfileItem[];
    total: number;
}
export declare const SubscribeRequest: MessageFns<SubscribeRequest>;
export declare const ProfileResponse: MessageFns<ProfileResponse>;
export declare const CreateProfileRequest: MessageFns<CreateProfileRequest>;
export declare const UpdateProfileRequest: MessageFns<UpdateProfileRequest>;
export declare const GetProfileByIdRequest: MessageFns<GetProfileByIdRequest>;
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const SearchProfilesRequest: MessageFns<SearchProfilesRequest>;
export declare const ProfileSearchItem: MessageFns<ProfileSearchItem>;
export declare const SearchProfilesResponse: MessageFns<SearchProfilesResponse>;
export declare const TrendingProfilesRequest: MessageFns<TrendingProfilesRequest>;
export declare const TrendingProfileItem: MessageFns<TrendingProfileItem>;
export declare const TrendingProfilesResponse: MessageFns<TrendingProfilesResponse>;
export interface ProfileService {
    Create(request: CreateProfileRequest): Promise<ProfileResponse>;
    Update(request: UpdateProfileRequest): Promise<ProfileResponse>;
    GetProfileById(request: GetProfileByIdRequest): Promise<ProfileResponse>;
    SubscribeProfile(request: SubscribeRequest): Promise<SuccessResponse>;
    SearchProfiles(request: SearchProfilesRequest): Promise<SearchProfilesResponse>;
    TrendingProfiles(request: TrendingProfilesRequest): Promise<TrendingProfilesResponse>;
}
export declare const ProfileServiceServiceName = "profile.ProfileService";
export declare class ProfileServiceClientImpl implements ProfileService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: CreateProfileRequest): Promise<ProfileResponse>;
    Update(request: UpdateProfileRequest): Promise<ProfileResponse>;
    GetProfileById(request: GetProfileByIdRequest): Promise<ProfileResponse>;
    SubscribeProfile(request: SubscribeRequest): Promise<SuccessResponse>;
    SearchProfiles(request: SearchProfilesRequest): Promise<SearchProfilesResponse>;
    TrendingProfiles(request: TrendingProfilesRequest): Promise<TrendingProfilesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
