import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "brand";
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
}
/** Request for creating a brand (userId comes from JWT in server) */
export interface CreateBrandRequest {
    userId: string;
    name: string;
    description?: string | undefined;
    logoUrl?: string | undefined;
    websiteUrl?: string | undefined;
}
/** Request for updating a brand */
export interface UpdateBrandRequest {
    userId: string;
    name?: string | undefined;
    description?: string | undefined;
    logoUrl?: string | undefined;
    websiteUrl?: string | undefined;
}
export declare const BrandResponse: MessageFns<BrandResponse>;
export declare const CreateBrandRequest: MessageFns<CreateBrandRequest>;
export declare const UpdateBrandRequest: MessageFns<UpdateBrandRequest>;
/** gRPC Brand Service */
export interface BrandService {
    Create(request: CreateBrandRequest): Promise<BrandResponse>;
    Update(request: UpdateBrandRequest): Promise<BrandResponse>;
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
