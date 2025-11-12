import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "campaign";
/** Request message for creating a campaign */
export interface CreateCampaignRequest {
    brandId: string;
    amountToInvest: number;
    startDate: string;
    endDate: string;
    tasks: TaskInput[];
    name: string;
    description: string;
    profileIds: string[];
    isPrivate: boolean;
}
export interface SuccessResponse {
    success: boolean;
}
/** Single task input (part of the campaign) */
export interface TaskInput {
    title: string;
    description: string;
    type: string;
    rule?: inAppTaskRule | undefined;
}
export interface inAppTaskRule {
    action: string;
    targets: TaskTargets[];
    countRequired: string;
    content?: TaskContent | undefined;
}
export interface TaskTargets {
    targetType: string;
    targetId: string;
}
export interface TaskContent {
    requireMention?: boolean | undefined;
}
export interface UpdateTaskRequest {
    title?: string | undefined;
    description?: string | undefined;
    brandId: string;
    type?: string | undefined;
    id: string;
}
export interface JoinPublicCampaignRequest {
    campaignId: string;
    profileId: string;
}
export interface LeaveCampaignRequest {
    campaignId: string;
    profileId: string;
}
export interface UpdatePrivateCampaignProfilesRequest {
    campaignId: string;
    profileId: string;
    brandId: string;
}
/** Response message after creating a campaign */
export interface CampaignResponse {
    id: string;
    brandId: string;
    amountToInvest: number;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    isPrivate: boolean;
    name: string;
    description: string;
    totalParticipants: string;
}
export interface CancelCampaignResponse {
    campaign: CampaignResponse | undefined;
    isRefund: boolean;
}
export interface CampaignByIdResponse {
    id: string;
    brandId: string;
    amountToInvest: number;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    isPrivate: boolean;
    name: string;
    description: string;
    tasks: TaskResponse[];
    brandUsername: string;
    totalParticipants: string;
    isJoined: boolean;
}
export interface UpdateCampaignRequest {
    id: string;
    brandId: string;
    amountToInvest?: number | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
}
/** Task returned in the response */
export interface TaskResponse {
    id: string;
    title: string;
    description: string;
    campaignId: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}
export interface TaskCompletedResponse {
    campaignId: string;
    taskId: string;
    profileId: string;
    brandId: string;
}
export interface GetCampaignsByBrandIdRequest {
    roleId: string;
    role: string;
    brandId?: string | undefined;
    /** e.g., "createdAt", "amountToInvest" */
    sortBy?: string | undefined;
    /** "asc" or "desc" */
    sortOrder?: string | undefined;
    /** e.g., "active", "completed" */
    status?: string | undefined;
    /** e.g., "2023-01-01" */
    startDateFrom?: string | undefined;
    /** e.g., "2023-12-31" */
    startDateTo?: string | undefined;
    /** e.g., "2023-01-01" */
    endDateFrom?: string | undefined;
    /** e.g., "2023-12-31" */
    endDateTo?: string | undefined;
    page?: string | undefined;
    limit?: string | undefined;
}
export interface CampaignsByIdRequest {
    id: string;
    roleId: string;
    role: string;
}
export interface CampaignsByProfileIdRequest {
    profileId: string;
}
export interface DeleteTaskByIdRequest {
    brandId: string;
    id: string;
}
export interface DeleteCampaignByIdRequest {
    brandId: string;
    id: string;
}
export interface GetTasksByCampaignIdRequest {
    campaignId: string;
    roleId: string;
    role: string;
}
export interface GetTasksResponse {
    tasks: TaskResponse[];
}
export interface GetCampaignsResponse {
    campaigns: CampaignResponse[];
}
export interface SearchCampaignsRequest {
    q: string;
    page: number;
    limit: number;
}
export interface CampaignSearchItem {
    id: string;
    name: string;
    brandId: string;
    createdAt: string;
    score: number;
}
export interface SearchCampaignsResponse {
    results: CampaignSearchItem[];
    total: number;
}
export interface GetCampaignProgressRequest {
    campaignId: string;
    brandId: string;
}
export interface CampaignProgressParticipant {
    profileId: string;
    profileCampaignId: string;
    username: string;
    name: string;
    avatarUrl: string;
    totalTasks: string;
    completedTasks: string;
    isCompleted: boolean;
    joinedAt: string;
    completedAt: string;
    followersCount: string;
    subscribersCount: string;
    totalEarning: string;
}
export interface GetCampaignProgressResponse {
    participants: CampaignProgressParticipant[];
    campaignId: string;
    campaignStatus: string;
    totalParticipants: number;
    totalTasks: number;
}
export declare const CreateCampaignRequest: MessageFns<CreateCampaignRequest>;
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const TaskInput: MessageFns<TaskInput>;
export declare const inAppTaskRule: MessageFns<inAppTaskRule>;
export declare const TaskTargets: MessageFns<TaskTargets>;
export declare const TaskContent: MessageFns<TaskContent>;
export declare const UpdateTaskRequest: MessageFns<UpdateTaskRequest>;
export declare const JoinPublicCampaignRequest: MessageFns<JoinPublicCampaignRequest>;
export declare const LeaveCampaignRequest: MessageFns<LeaveCampaignRequest>;
export declare const UpdatePrivateCampaignProfilesRequest: MessageFns<UpdatePrivateCampaignProfilesRequest>;
export declare const CampaignResponse: MessageFns<CampaignResponse>;
export declare const CancelCampaignResponse: MessageFns<CancelCampaignResponse>;
export declare const CampaignByIdResponse: MessageFns<CampaignByIdResponse>;
export declare const UpdateCampaignRequest: MessageFns<UpdateCampaignRequest>;
export declare const TaskResponse: MessageFns<TaskResponse>;
export declare const TaskCompletedResponse: MessageFns<TaskCompletedResponse>;
export declare const GetCampaignsByBrandIdRequest: MessageFns<GetCampaignsByBrandIdRequest>;
export declare const CampaignsByIdRequest: MessageFns<CampaignsByIdRequest>;
export declare const CampaignsByProfileIdRequest: MessageFns<CampaignsByProfileIdRequest>;
export declare const DeleteTaskByIdRequest: MessageFns<DeleteTaskByIdRequest>;
export declare const DeleteCampaignByIdRequest: MessageFns<DeleteCampaignByIdRequest>;
export declare const GetTasksByCampaignIdRequest: MessageFns<GetTasksByCampaignIdRequest>;
export declare const GetTasksResponse: MessageFns<GetTasksResponse>;
export declare const GetCampaignsResponse: MessageFns<GetCampaignsResponse>;
export declare const SearchCampaignsRequest: MessageFns<SearchCampaignsRequest>;
export declare const CampaignSearchItem: MessageFns<CampaignSearchItem>;
export declare const SearchCampaignsResponse: MessageFns<SearchCampaignsResponse>;
export declare const GetCampaignProgressRequest: MessageFns<GetCampaignProgressRequest>;
export declare const CampaignProgressParticipant: MessageFns<CampaignProgressParticipant>;
export declare const GetCampaignProgressResponse: MessageFns<GetCampaignProgressResponse>;
/** gRPC Service */
export interface CampaignService {
    CreateCampaign(request: CreateCampaignRequest): Promise<CampaignResponse>;
    GetCampaignsByBrandId(request: GetCampaignsByBrandIdRequest): Promise<GetCampaignsResponse>;
    GetCampaignById(request: CampaignsByIdRequest): Promise<CampaignByIdResponse>;
    UpdateCampaign(request: UpdateCampaignRequest): Promise<CampaignResponse>;
    UpdateCampaignTasks(request: UpdateTaskRequest): Promise<TaskResponse>;
    GetTasksByCampaignId(request: GetTasksByCampaignIdRequest): Promise<GetTasksResponse>;
    CancelCampaignById(request: CampaignsByIdRequest): Promise<CancelCampaignResponse>;
    DeleteTaskById(request: DeleteTaskByIdRequest): Promise<TaskResponse>;
    AddProfileToCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    RemoveProfileFromCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    JoinPublicCampaign(request: JoinPublicCampaignRequest): Promise<SuccessResponse>;
    LeaveCampaign(request: LeaveCampaignRequest): Promise<SuccessResponse>;
    MarkTaskAsCompleted(request: TaskCompletedResponse): Promise<SuccessResponse>;
    Health(request: Empty): Promise<SuccessResponse>;
    SearchCampaigns(request: SearchCampaignsRequest): Promise<SearchCampaignsResponse>;
    GetJoinedCampaignsByProfileId(request: CampaignsByProfileIdRequest): Promise<GetCampaignsResponse>;
    GetCampaignProgress(request: GetCampaignProgressRequest): Promise<GetCampaignProgressResponse>;
}
export declare const CampaignServiceServiceName = "campaign.CampaignService";
export declare class CampaignServiceClientImpl implements CampaignService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateCampaign(request: CreateCampaignRequest): Promise<CampaignResponse>;
    GetCampaignsByBrandId(request: GetCampaignsByBrandIdRequest): Promise<GetCampaignsResponse>;
    GetCampaignById(request: CampaignsByIdRequest): Promise<CampaignByIdResponse>;
    UpdateCampaign(request: UpdateCampaignRequest): Promise<CampaignResponse>;
    UpdateCampaignTasks(request: UpdateTaskRequest): Promise<TaskResponse>;
    GetTasksByCampaignId(request: GetTasksByCampaignIdRequest): Promise<GetTasksResponse>;
    CancelCampaignById(request: CampaignsByIdRequest): Promise<CancelCampaignResponse>;
    DeleteTaskById(request: DeleteTaskByIdRequest): Promise<TaskResponse>;
    AddProfileToCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    RemoveProfileFromCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    JoinPublicCampaign(request: JoinPublicCampaignRequest): Promise<SuccessResponse>;
    LeaveCampaign(request: LeaveCampaignRequest): Promise<SuccessResponse>;
    MarkTaskAsCompleted(request: TaskCompletedResponse): Promise<SuccessResponse>;
    Health(request: Empty): Promise<SuccessResponse>;
    SearchCampaigns(request: SearchCampaignsRequest): Promise<SearchCampaignsResponse>;
    GetJoinedCampaignsByProfileId(request: CampaignsByProfileIdRequest): Promise<GetCampaignsResponse>;
    GetCampaignProgress(request: GetCampaignProgressRequest): Promise<GetCampaignProgressResponse>;
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
