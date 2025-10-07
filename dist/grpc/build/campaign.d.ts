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
}
export interface CampaignsByIdRequest {
    id: string;
    roleId: string;
    role: string;
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
}
export interface GetTasksResponse {
    tasks: TaskResponse[];
}
export interface GetCampaignsResponse {
    campaigns: CampaignResponse[];
}
export declare const CreateCampaignRequest: MessageFns<CreateCampaignRequest>;
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const TaskInput: MessageFns<TaskInput>;
export declare const UpdateTaskRequest: MessageFns<UpdateTaskRequest>;
export declare const JoinPublicCampaignRequest: MessageFns<JoinPublicCampaignRequest>;
export declare const LeaveCampaignRequest: MessageFns<LeaveCampaignRequest>;
export declare const UpdatePrivateCampaignProfilesRequest: MessageFns<UpdatePrivateCampaignProfilesRequest>;
export declare const CampaignResponse: MessageFns<CampaignResponse>;
export declare const UpdateCampaignRequest: MessageFns<UpdateCampaignRequest>;
export declare const TaskResponse: MessageFns<TaskResponse>;
export declare const TaskCompletedResponse: MessageFns<TaskCompletedResponse>;
export declare const GetCampaignsByBrandIdRequest: MessageFns<GetCampaignsByBrandIdRequest>;
export declare const CampaignsByIdRequest: MessageFns<CampaignsByIdRequest>;
export declare const DeleteTaskByIdRequest: MessageFns<DeleteTaskByIdRequest>;
export declare const DeleteCampaignByIdRequest: MessageFns<DeleteCampaignByIdRequest>;
export declare const GetTasksByCampaignIdRequest: MessageFns<GetTasksByCampaignIdRequest>;
export declare const GetTasksResponse: MessageFns<GetTasksResponse>;
export declare const GetCampaignsResponse: MessageFns<GetCampaignsResponse>;
/** gRPC Service */
export interface CampaignService {
    CreateCampaign(request: CreateCampaignRequest): Promise<CampaignResponse>;
    GetCampaignsByBrandId(request: GetCampaignsByBrandIdRequest): Promise<GetCampaignsResponse>;
    GetCampaignById(request: CampaignsByIdRequest): Promise<CampaignResponse>;
    UpdateCampaign(request: UpdateCampaignRequest): Promise<CampaignResponse>;
    UpdateCampaignTasks(request: UpdateTaskRequest): Promise<TaskResponse>;
    GetTasksByCampaignId(request: GetTasksByCampaignIdRequest): Promise<GetTasksResponse>;
    DeleteCampaignById(request: CampaignsByIdRequest): Promise<CampaignResponse>;
    DeleteTaskById(request: DeleteTaskByIdRequest): Promise<TaskResponse>;
    AddProfileToCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    RemoveProfileFromCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    JoinPublicCampaign(request: JoinPublicCampaignRequest): Promise<SuccessResponse>;
    LeaveCampaign(request: LeaveCampaignRequest): Promise<SuccessResponse>;
    MarkTaskAsCompleted(request: TaskCompletedResponse): Promise<SuccessResponse>;
    Health(request: Empty): Promise<SuccessResponse>;
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
    GetCampaignById(request: CampaignsByIdRequest): Promise<CampaignResponse>;
    UpdateCampaign(request: UpdateCampaignRequest): Promise<CampaignResponse>;
    UpdateCampaignTasks(request: UpdateTaskRequest): Promise<TaskResponse>;
    GetTasksByCampaignId(request: GetTasksByCampaignIdRequest): Promise<GetTasksResponse>;
    DeleteCampaignById(request: CampaignsByIdRequest): Promise<CampaignResponse>;
    DeleteTaskById(request: DeleteTaskByIdRequest): Promise<TaskResponse>;
    AddProfileToCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    RemoveProfileFromCampaign(request: UpdatePrivateCampaignProfilesRequest): Promise<SuccessResponse>;
    JoinPublicCampaign(request: JoinPublicCampaignRequest): Promise<SuccessResponse>;
    LeaveCampaign(request: LeaveCampaignRequest): Promise<SuccessResponse>;
    MarkTaskAsCompleted(request: TaskCompletedResponse): Promise<SuccessResponse>;
    Health(request: Empty): Promise<SuccessResponse>;
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
