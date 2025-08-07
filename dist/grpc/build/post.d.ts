import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "post";
export interface CreatePostRequest {
    userId: string;
    caption: string;
    accessType: string;
    priceInCents?: number | undefined;
    s3Key: string;
    fileType: string;
    originalFileName?: string | undefined;
}
export interface UpdatePostRequest {
    id: string;
    userId: string;
    caption?: string | undefined;
    /** "PUBLIC", "SUBSCRIBER", "PAID" */
    accessType?: string | undefined;
    priceInCents?: number | undefined;
}
export interface GetPostsByIdsRequest {
    ids: string[];
}
export interface GetPostsByIdsResponse {
    posts: PostResponse[];
}
export interface GenerateUploadUrlRequest {
    userId: string;
    fileName: string;
    contentType: string;
}
export interface GenerateUploadUrlResponse {
    uploadUrl: string;
    key: string;
}
export interface PostResponse {
    id: string;
    userId: string;
    caption: string;
    /** "PUBLIC", "SUBSCRIBER", "PAID" */
    accessType: string;
    priceInCents?: number | undefined;
    s3Key: string;
    /** "IMAGE", "VIDEO", "CODE", "OTHER" */
    fileType: string;
    originalFileName: string;
    createdAt: string;
    updatedAt: string;
}
export declare const CreatePostRequest: MessageFns<CreatePostRequest>;
export declare const UpdatePostRequest: MessageFns<UpdatePostRequest>;
export declare const GetPostsByIdsRequest: MessageFns<GetPostsByIdsRequest>;
export declare const GetPostsByIdsResponse: MessageFns<GetPostsByIdsResponse>;
export declare const GenerateUploadUrlRequest: MessageFns<GenerateUploadUrlRequest>;
export declare const GenerateUploadUrlResponse: MessageFns<GenerateUploadUrlResponse>;
export declare const PostResponse: MessageFns<PostResponse>;
export interface PostService {
    Create(request: CreatePostRequest): Promise<PostResponse>;
    Update(request: UpdatePostRequest): Promise<PostResponse>;
    GetPostsByIds(request: GetPostsByIdsRequest): Promise<GetPostsByIdsResponse>;
    GenerateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
}
export declare const PostServiceServiceName = "post.PostService";
export declare class PostServiceClientImpl implements PostService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: CreatePostRequest): Promise<PostResponse>;
    Update(request: UpdatePostRequest): Promise<PostResponse>;
    GetPostsByIds(request: GetPostsByIdsRequest): Promise<GetPostsByIdsResponse>;
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
