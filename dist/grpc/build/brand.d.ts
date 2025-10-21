import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "brand";
export interface BrandByIdRequest {
    brandId: string;
    /** ID of the user making the request (for auth, if needed) */
    userId: string;
}
/** Response shape (same for both create and update) */
export interface BrandResponse {
    id: string;
    userId: string;
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
    createdAt: string;
    updatedAt: string;
    jwtToken?: string | undefined;
    refreshToken?: string | undefined;
    followersCount: string;
    followingCount: string;
    tags: string[];
    campaignCount: string;
    tokenName: string;
    discord: string;
    twitter: string;
    telegram: string;
    isFollowing?: boolean | undefined;
    username: string;
}
export interface CreateBrandRequest {
    userId: string;
    name?: string | undefined;
    username?: string | undefined;
    description?: string | undefined;
    logoUrl?: string | undefined;
    websiteUrl?: string | undefined;
    tags: string[];
    discord?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    tokenName?: string | undefined;
}
/** Request for updating a brand */
export interface UpdateBrandRequest {
    userId: string;
    name?: string | undefined;
    description?: string | undefined;
    logoUrl?: string | undefined;
    websiteUrl?: string | undefined;
    tags: string[];
    discord?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    tokenName?: string | undefined;
    username?: string | undefined;
}
export interface SearchBrandsRequest {
    q: string;
    page: number;
    limit: number;
}
export interface BrandSearchItem {
    id: string;
    username: string;
    name: string;
    logoUrl: string;
    createdAt: string;
    score: number;
}
export interface SearchBrandsResponse {
    results: BrandSearchItem[];
    total: number;
}
export declare const BrandByIdRequest: MessageFns<BrandByIdRequest>;
export declare const BrandResponse: MessageFns<BrandResponse>;
export declare const CreateBrandRequest: MessageFns<CreateBrandRequest>;
export declare const UpdateBrandRequest: MessageFns<UpdateBrandRequest>;
export declare const SearchBrandsRequest: MessageFns<SearchBrandsRequest>;
export declare const BrandSearchItem: MessageFns<BrandSearchItem>;
export declare const SearchBrandsResponse: MessageFns<SearchBrandsResponse>;
/** gRPC Brand Service */
export interface BrandService {
    Create(request: CreateBrandRequest): Promise<BrandResponse>;
    Update(request: UpdateBrandRequest): Promise<BrandResponse>;
    GetBrandById(request: BrandByIdRequest): Promise<BrandResponse>;
    SearchBrands(request: SearchBrandsRequest): Promise<SearchBrandsResponse>;
}
export declare const BrandServiceServiceName = "brand.BrandService";
export declare class BrandServiceClientImpl implements BrandService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: CreateBrandRequest): Promise<BrandResponse>;
    Update(request: UpdateBrandRequest): Promise<BrandResponse>;
    GetBrandById(request: BrandByIdRequest): Promise<BrandResponse>;
    SearchBrands(request: SearchBrandsRequest): Promise<SearchBrandsResponse>;
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
