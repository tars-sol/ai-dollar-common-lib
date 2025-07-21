import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "auth";
export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface SsoLoginRequest {
    idToken: string;
    provider: string;
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
}
export interface AuthResponse {
    token: string;
    refreshToken: string;
    user: UserRequest | undefined;
}
export declare const RegisterRequest: MessageFns<RegisterRequest>;
export declare const LoginRequest: MessageFns<LoginRequest>;
export declare const SsoLoginRequest: MessageFns<SsoLoginRequest>;
export declare const WalletNonceRequest: MessageFns<WalletNonceRequest>;
export declare const WalletNonceResponse: MessageFns<WalletNonceResponse>;
export declare const WalletLoginRequest: MessageFns<WalletLoginRequest>;
export declare const LinkWalletRequest: MessageFns<LinkWalletRequest>;
export declare const RefreshTokenRequest: MessageFns<RefreshTokenRequest>;
export declare const UserRequest: MessageFns<UserRequest>;
export declare const AuthResponse: MessageFns<AuthResponse>;
export interface AuthService {
    Register(request: RegisterRequest): Promise<AuthResponse>;
    Login(request: LoginRequest): Promise<AuthResponse>;
    SsoLogin(request: SsoLoginRequest): Promise<AuthResponse>;
    WalletNonce(request: WalletNonceRequest): Promise<WalletNonceResponse>;
    WalletLogin(request: WalletLoginRequest): Promise<AuthResponse>;
    LinkWallet(request: LinkWalletRequest): Promise<AuthResponse>;
    RefreshToken(request: RefreshTokenRequest): Promise<AuthResponse>;
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
