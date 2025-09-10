import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "post";
export interface CreatePostRequest {
    profileId: string;
    caption: string;
    accessType: string;
    postType: string;
    mimeType?: string | undefined;
    giphyUrl?: string | undefined;
    mediaType?: string | undefined;
    s3Key?: string | undefined;
    fileType?: string | undefined;
    originalFileName?: string | undefined;
    pollEndTime?: string | undefined;
    options: string[];
}
export interface DeletePostRequest {
    id: string;
    profileId: string;
}
export interface SuccessResponse {
    success: boolean;
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
    page: number;
    perPage: number;
    role: string;
    roleId: string;
    userId: string;
}
export interface GetFeedResponse {
    posts: PostResponse[];
}
export interface CreateCommentRequest {
    userId: string;
    text: string;
    postId: string;
    role: string;
}
export interface CommentResponse {
    text: string;
    postId: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    commentCreator?: CommentCreator | undefined;
}
export interface GetCommentsRequest {
    postId: string;
}
export interface GetPortfolioRequest {
    profileId: string;
    userId: string;
    role: string;
    roleId: string;
}
export interface GetCommentsResponse {
    comments: CommentResponse[];
}
export interface PostMediaResponse {
    id: string;
    mimeType?: string | undefined;
    mediaType: string;
    s3Key?: string | undefined;
    originalFileName?: string | undefined;
    signedUrl?: string | undefined;
    giphyUrl?: string | undefined;
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
    roleId: string;
    postId: string;
    optionId: string;
    role: string;
    userId: string;
}
export interface HealthResponse {
    isHealthy: boolean;
}
export interface PostPollResponse {
    id: string;
    pollEndTime: string;
    votedProfilePics: string[];
    postPollOptions: PostPollOptionResponse[];
}
export interface PostPollOptionResponse {
    id: string;
    text: string;
    voteCount: string;
    indexNumber: string;
    userVoted: boolean;
}
export interface PostReactionRequest {
    roleId: string;
    postId: string;
    reaction: boolean;
    reactionType: string;
    role: string;
    userId: string;
}
export interface Creator {
    name: string;
    image: string;
    isVerified: boolean;
}
export interface AddToPortfolioRequest {
    profileId: string;
    postIds: string[];
}
export interface RemoveFromPortfolioRequest {
    profileId: string;
    postIds: string[];
}
export interface CommentCreator {
    name: string;
    image: string;
    isVerified: boolean;
    roleId: string;
    role: string;
    userId: string;
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
    commentCount: string;
    likeCount: string;
    dislikeCount: string;
    creator?: Creator | undefined;
    viewerLiked?: boolean | undefined;
    viewerDisliked?: boolean | undefined;
}
export interface GetProfilePostsRequest {
    profileId: string;
    userId: string;
}
export declare const CreatePostRequest: MessageFns<CreatePostRequest>;
export declare const DeletePostRequest: MessageFns<DeletePostRequest>;
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const UpdatePostRequest: MessageFns<UpdatePostRequest>;
export declare const GenerateUploadUrlRequest: MessageFns<GenerateUploadUrlRequest>;
export declare const GenerateUploadUrlResponse: MessageFns<GenerateUploadUrlResponse>;
export declare const GetFeedRequest: MessageFns<GetFeedRequest>;
export declare const GetFeedResponse: MessageFns<GetFeedResponse>;
export declare const CreateCommentRequest: MessageFns<CreateCommentRequest>;
export declare const CommentResponse: MessageFns<CommentResponse>;
export declare const GetCommentsRequest: MessageFns<GetCommentsRequest>;
export declare const GetPortfolioRequest: MessageFns<GetPortfolioRequest>;
export declare const GetCommentsResponse: MessageFns<GetCommentsResponse>;
export declare const PostMediaResponse: MessageFns<PostMediaResponse>;
export declare const PostFileResponse: MessageFns<PostFileResponse>;
export declare const VoteOnPollRequest: MessageFns<VoteOnPollRequest>;
export declare const HealthResponse: MessageFns<HealthResponse>;
export declare const PostPollResponse: MessageFns<PostPollResponse>;
export declare const PostPollOptionResponse: MessageFns<PostPollOptionResponse>;
export declare const PostReactionRequest: MessageFns<PostReactionRequest>;
export declare const Creator: MessageFns<Creator>;
export declare const AddToPortfolioRequest: MessageFns<AddToPortfolioRequest>;
export declare const RemoveFromPortfolioRequest: MessageFns<RemoveFromPortfolioRequest>;
export declare const CommentCreator: MessageFns<CommentCreator>;
export declare const PostResponse: MessageFns<PostResponse>;
export declare const GetProfilePostsRequest: MessageFns<GetProfilePostsRequest>;
export interface PostService {
    Create(request: CreatePostRequest): Promise<PostResponse>;
    Update(request: UpdatePostRequest): Promise<PostResponse>;
    GenerateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
    GetFeed(request: GetFeedRequest): Promise<GetFeedResponse>;
    VoteOnPoll(request: VoteOnPollRequest): Promise<PostResponse>;
    GetProfilePosts(request: GetProfilePostsRequest): Promise<GetFeedResponse>;
    PostReaction(request: PostReactionRequest): Promise<PostResponse>;
    CreateComment(request: CreateCommentRequest): Promise<CommentResponse>;
    GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse>;
    DeletePost(request: DeletePostRequest): Promise<SuccessResponse>;
    AddToPortfolio(request: AddToPortfolioRequest): Promise<SuccessResponse>;
    RemoveFromPortfolio(request: RemoveFromPortfolioRequest): Promise<SuccessResponse>;
    GetPortfolio(request: GetPortfolioRequest): Promise<GetFeedResponse>;
    Health(request: Empty): Promise<HealthResponse>;
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
    GetProfilePosts(request: GetProfilePostsRequest): Promise<GetFeedResponse>;
    PostReaction(request: PostReactionRequest): Promise<PostResponse>;
    CreateComment(request: CreateCommentRequest): Promise<CommentResponse>;
    GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse>;
    DeletePost(request: DeletePostRequest): Promise<SuccessResponse>;
    AddToPortfolio(request: AddToPortfolioRequest): Promise<SuccessResponse>;
    RemoveFromPortfolio(request: RemoveFromPortfolioRequest): Promise<SuccessResponse>;
    GetPortfolio(request: GetPortfolioRequest): Promise<GetFeedResponse>;
    Health(request: Empty): Promise<HealthResponse>;
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
