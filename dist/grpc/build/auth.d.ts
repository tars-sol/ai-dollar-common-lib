import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "auth";
export interface SuccessResponse {
    success: boolean;
}
export interface FollowRequest {
    roleId: string;
    followingId: string;
    role: string;
    userId: string;
    follow: boolean;
}
export interface RevokeTokenRequest {
    accessToken: string;
    refreshToken: string;
}
export interface ValidateTokenRequest {
    token: string;
}
export interface ValidateTokenResponse {
    isValid: boolean;
}
export interface RevokeTokenResponse {
    success: boolean;
}
export interface RegisterRequest {
    email: string;
    password: string;
    username: string;
    name: string;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface GenerateUploadUrlRequest {
    userId: string;
    fileName: string;
    contentType: string;
}
export interface GenerateUploadUrlResponse {
    url: string;
    fields: {
        [key: string]: string;
    };
    key: string;
    maxBytes: number;
}
export interface GenerateUploadUrlResponse_FieldsEntry {
    key: string;
    value: string;
}
export interface SsoLoginRequest {
    provider: string;
    idToken?: string | undefined;
    code?: string | undefined;
    accessToken?: string | undefined;
}
export interface WalletNonceRequest {
    wallet: string;
}
export interface WalletNonceResponse {
    walletNonce: string;
}
export interface WalletLoginRequest {
    walletAddress: string;
    signature: string;
    nonce: string;
}
export interface HealthResponse {
    isHealthy: boolean;
}
export interface LinkWalletRequest {
    userId: string;
    walletAddress: string;
    signature: string;
    nonce: string;
}
export interface RefreshTokenRequest {
    refreshToken: string;
}
export interface UserRequest {
    id: string;
    email: string;
    walletAddress: string;
    role: string;
    roleId: string;
    name: string;
    username: string;
    roleImage: string;
}
export interface AuthResponse {
    token: string;
    refreshToken: string;
    user: UserRequest | undefined;
}
export interface Topic {
    /** slug/ID (e.g., "lifestyle") */
    id: string;
    /** display label (e.g., "Lifestyle") */
    name: string;
}
export interface OnboardingTopicsResponse {
    topics: Topic[];
}
export interface SubmitOnboardingTopicsRequest {
    userId: string;
    /** e.g., ["technology","ai-ml","beginner-friendly"] */
    topicIds: string[];
}
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const FollowRequest: MessageFns<FollowRequest>;
export declare const RevokeTokenRequest: MessageFns<RevokeTokenRequest>;
export declare const ValidateTokenRequest: MessageFns<ValidateTokenRequest>;
export declare const ValidateTokenResponse: MessageFns<ValidateTokenResponse>;
export declare const RevokeTokenResponse: MessageFns<RevokeTokenResponse>;
export declare const RegisterRequest: MessageFns<RegisterRequest>;
export declare const LoginRequest: MessageFns<LoginRequest>;
export declare const GenerateUploadUrlRequest: MessageFns<GenerateUploadUrlRequest>;
export declare const GenerateUploadUrlResponse: MessageFns<GenerateUploadUrlResponse>;
export declare const GenerateUploadUrlResponse_FieldsEntry: MessageFns<GenerateUploadUrlResponse_FieldsEntry>;
export declare const SsoLoginRequest: MessageFns<SsoLoginRequest>;
export declare const WalletNonceRequest: MessageFns<WalletNonceRequest>;
export declare const WalletNonceResponse: MessageFns<WalletNonceResponse>;
export declare const WalletLoginRequest: MessageFns<WalletLoginRequest>;
export declare const HealthResponse: MessageFns<HealthResponse>;
export declare const LinkWalletRequest: MessageFns<LinkWalletRequest>;
export declare const RefreshTokenRequest: MessageFns<RefreshTokenRequest>;
export declare const UserRequest: MessageFns<UserRequest>;
export declare const AuthResponse: MessageFns<AuthResponse>;
export declare const Topic: MessageFns<Topic>;
export declare const OnboardingTopicsResponse: MessageFns<OnboardingTopicsResponse>;
export declare const SubmitOnboardingTopicsRequest: MessageFns<SubmitOnboardingTopicsRequest>;
export interface AuthService {
    Register(request: RegisterRequest): Promise<AuthResponse>;
    Login(request: LoginRequest): Promise<AuthResponse>;
    SsoLogin(request: SsoLoginRequest): Promise<AuthResponse>;
    WalletNonce(request: WalletNonceRequest): Promise<WalletNonceResponse>;
    WalletLogin(request: WalletLoginRequest): Promise<AuthResponse>;
    LinkWallet(request: LinkWalletRequest): Promise<AuthResponse>;
    RefreshToken(request: RefreshTokenRequest): Promise<AuthResponse>;
    RevokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse>;
    ValidateToken(request: ValidateTokenRequest): Promise<ValidateTokenResponse>;
    Health(request: Empty): Promise<HealthResponse>;
    FollowUser(request: FollowRequest): Promise<SuccessResponse>;
    ListOnboardingTopics(request: Empty): Promise<OnboardingTopicsResponse>;
    SubmitOnboardingTopics(request: SubmitOnboardingTopicsRequest): Promise<SuccessResponse>;
    GenerateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
}
export declare const AuthServiceServiceName = "auth.AuthService";
export declare class AuthServiceClientImpl implements AuthService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Register(request: RegisterRequest): Promise<AuthResponse>;
    Login(request: LoginRequest): Promise<AuthResponse>;
    SsoLogin(request: SsoLoginRequest): Promise<AuthResponse>;
    WalletNonce(request: WalletNonceRequest): Promise<WalletNonceResponse>;
    WalletLogin(request: WalletLoginRequest): Promise<AuthResponse>;
    LinkWallet(request: LinkWalletRequest): Promise<AuthResponse>;
    RefreshToken(request: RefreshTokenRequest): Promise<AuthResponse>;
    RevokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse>;
    ValidateToken(request: ValidateTokenRequest): Promise<ValidateTokenResponse>;
    Health(request: Empty): Promise<HealthResponse>;
    FollowUser(request: FollowRequest): Promise<SuccessResponse>;
    ListOnboardingTopics(request: Empty): Promise<OnboardingTopicsResponse>;
    SubmitOnboardingTopics(request: SubmitOnboardingTopicsRequest): Promise<SuccessResponse>;
    GenerateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
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
