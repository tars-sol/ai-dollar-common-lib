import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "user";
export interface CreateProfileRequest {
    userId: string;
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    github: string;
    youtube: string;
    linkedin: string;
}
export interface UpdateProfileRequest {
    userId: string;
    name: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    github: string;
    youtube: string;
    linkedin: string;
}
export interface GetProfileByUsernameRequest {
    username: string;
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
    github: string;
    youtube: string;
    linkedin: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}
export declare const CreateProfileRequest: MessageFns<CreateProfileRequest>;
export declare const UpdateProfileRequest: MessageFns<UpdateProfileRequest>;
export declare const GetProfileByUsernameRequest: MessageFns<GetProfileByUsernameRequest>;
export declare const ProfileResponse: MessageFns<ProfileResponse>;
export interface ProfileService {
    CreateProfile(request: CreateProfileRequest): Promise<ProfileResponse>;
    UpdateProfile(request: UpdateProfileRequest): Promise<ProfileResponse>;
    GetProfileByUsername(request: GetProfileByUsernameRequest): Promise<ProfileResponse>;
}
export declare const ProfileServiceServiceName = "user.ProfileService";
export declare class ProfileServiceClientImpl implements ProfileService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateProfile(request: CreateProfileRequest): Promise<ProfileResponse>;
    UpdateProfile(request: UpdateProfileRequest): Promise<ProfileResponse>;
    GetProfileByUsername(request: GetProfileByUsernameRequest): Promise<ProfileResponse>;
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
