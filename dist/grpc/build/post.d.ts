import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "post";
export interface CreatePostRequest {
    profileId: string;
    caption: string;
    accessType: string;
    postType: string;
    mimeType?: string | undefined;
    mediaType?: string | undefined;
    s3Key?: string | undefined;
    fileType?: string | undefined;
    originalFileName?: string | undefined;
    pollEndTime?: string | undefined;
    options: string[];
}
export interface UpdatePostRequest {
    id: string;
    profileId: string;
    caption?: string | undefined;
    accessType?: string | undefined;
}
export interface GenerateUploadUrlRequest {
    profileId: string;
    fileName: string;
    contentType: string;
}
export interface GenerateUploadUrlResponse {
    uploadUrl: string;
    key: string;
}
export interface GetFeedRequest {
    profileId: string;
    page: number;
    perPage: number;
}
export interface GetFeedResponse {
    posts: PostResponse[];
}
export interface CreateCommentRequest {
    profileId: string;
    text: string;
    postId: string;
}
export interface CommentResponse {
    profileId: string;
    text: string;
    postId: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}
export interface GetCommentsRequest {
    postId: string;
}
export interface GetCommentsResponse {
    comments: CommentResponse | undefined;
}
export interface PostMediaResponse {
    id: string;
    mimeType: string;
    mediaType: string;
    s3Key: string;
    originalFileName: string;
    signedUrl: string;
}
export interface PostFileResponse {
    id: string;
    mimeType: string;
    s3Key: string;
    originalFileName: string;
    signedUrl: string;
    fileType: string;
    sizeInBytes: string;
}
export interface VoteOnPollRequest {
    profileId: string;
    postId: string;
    optionId: string;
}
export interface PostPollResponse {
    id: string;
    pollEndTime: string;
    postPollOptions: PostPollOptionResponse[];
}
export interface PostPollOptionResponse {
    id: string;
    text: string;
    voteCount: string;
}
export interface PostResponse {
    id: string;
    profileId: string;
    caption: string;
    accessType: string;
    postType: string;
    postMedia?: PostMediaResponse | undefined;
    postPoll?: PostPollResponse | undefined;
    postFile?: PostFileResponse | undefined;
    createdAt: string;
    updatedAt: string;
}
export interface GetUserPostsRequest {
    profileId: string;
}
export declare const CreatePostRequest: MessageFns<CreatePostRequest>;
export declare const UpdatePostRequest: MessageFns<UpdatePostRequest>;
export declare const GenerateUploadUrlRequest: MessageFns<GenerateUploadUrlRequest>;
export declare const GenerateUploadUrlResponse: MessageFns<GenerateUploadUrlResponse>;
export declare const GetFeedRequest: MessageFns<GetFeedRequest>;
export declare const GetFeedResponse: MessageFns<GetFeedResponse>;
export declare const CreateCommentRequest: MessageFns<CreateCommentRequest>;
export declare const CommentResponse: MessageFns<CommentResponse>;
export declare const GetCommentsRequest: MessageFns<GetCommentsRequest>;
export declare const GetCommentsResponse: MessageFns<GetCommentsResponse>;
export declare const PostMediaResponse: MessageFns<PostMediaResponse>;
export declare const PostFileResponse: MessageFns<PostFileResponse>;
export declare const VoteOnPollRequest: MessageFns<VoteOnPollRequest>;
export declare const PostPollResponse: MessageFns<PostPollResponse>;
export declare const PostPollOptionResponse: MessageFns<PostPollOptionResponse>;
export declare const PostResponse: MessageFns<PostResponse>;
export declare const GetUserPostsRequest: MessageFns<GetUserPostsRequest>;
export interface PostService {
    Create(request: CreatePostRequest): Promise<PostResponse>;
    Update(request: UpdatePostRequest): Promise<PostResponse>;
    GenerateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
    GetFeed(request: GetFeedRequest): Promise<GetFeedResponse>;
    VoteOnPoll(request: VoteOnPollRequest): Promise<PostResponse>;
    GetUserPosts(request: GetUserPostsRequest): Promise<GetFeedResponse>;
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
    GenerateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
    GetFeed(request: GetFeedRequest): Promise<GetFeedResponse>;
    VoteOnPoll(request: VoteOnPollRequest): Promise<PostResponse>;
    GetUserPosts(request: GetUserPostsRequest): Promise<GetFeedResponse>;
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
