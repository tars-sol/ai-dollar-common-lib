import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "subscription";
export interface SuccessResponse {
    success: boolean;
}
export interface HealthResponse {
    isHealthy: boolean;
}
export interface CreateTierRequest {
    creatorId: string;
    name: string;
    description?: string | undefined;
    accessMask?: number | undefined;
    currency?: string | undefined;
    monthlyPriceCents?: number | undefined;
    annualPriceCents?: number | undefined;
}
export interface UpdateTierRequest {
    tierId: string;
    name?: string | undefined;
    description?: string | undefined;
    accessMask?: number | undefined;
    currency?: string | undefined;
}
export interface UpdateTierPricesRequest {
    tierId: string;
    monthlyPriceCents?: number | undefined;
    annualPriceCents?: number | undefined;
}
export interface ToggleTierActiveRequest {
    tierId: string;
    isActive: boolean;
}
export interface GetTierRequest {
    tierId: string;
}
export interface GetCreatorTiersRequest {
    creatorId: string;
    onlyActive?: boolean | undefined;
}
export interface GetCreatorTiersResponse {
    tiers: SubscriptionTierResponse[];
}
export interface DeleteTierRequest {
    tierId: string;
    creatorId: string;
}
export interface SubscriptionTierResponse {
    id: string;
    creatorId: string;
    name: string;
    description?: string | undefined;
    stripeProductId?: string | undefined;
    monthlyStripePriceId?: string | undefined;
    monthlyPriceCents?: number | undefined;
    annualStripePriceId?: string | undefined;
    annualPriceCents?: number | undefined;
    currency: string;
    accessMask: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const HealthResponse: MessageFns<HealthResponse>;
export declare const CreateTierRequest: MessageFns<CreateTierRequest>;
export declare const UpdateTierRequest: MessageFns<UpdateTierRequest>;
export declare const UpdateTierPricesRequest: MessageFns<UpdateTierPricesRequest>;
export declare const ToggleTierActiveRequest: MessageFns<ToggleTierActiveRequest>;
export declare const GetTierRequest: MessageFns<GetTierRequest>;
export declare const GetCreatorTiersRequest: MessageFns<GetCreatorTiersRequest>;
export declare const GetCreatorTiersResponse: MessageFns<GetCreatorTiersResponse>;
export declare const DeleteTierRequest: MessageFns<DeleteTierRequest>;
export declare const SubscriptionTierResponse: MessageFns<SubscriptionTierResponse>;
export interface SubscriptionService {
    CreateTier(request: CreateTierRequest): Promise<SubscriptionTierResponse>;
    UpdateTier(request: UpdateTierRequest): Promise<SubscriptionTierResponse>;
    UpdateTierPrices(request: UpdateTierPricesRequest): Promise<SubscriptionTierResponse>;
    ToggleTierActive(request: ToggleTierActiveRequest): Promise<SubscriptionTierResponse>;
    GetTier(request: GetTierRequest): Promise<SubscriptionTierResponse>;
    GetCreatorTiers(request: GetCreatorTiersRequest): Promise<GetCreatorTiersResponse>;
    DeleteTier(request: DeleteTierRequest): Promise<SuccessResponse>;
    Health(request: Empty): Promise<HealthResponse>;
}
export declare const SubscriptionServiceServiceName = "subscription.SubscriptionService";
export declare class SubscriptionServiceClientImpl implements SubscriptionService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateTier(request: CreateTierRequest): Promise<SubscriptionTierResponse>;
    UpdateTier(request: UpdateTierRequest): Promise<SubscriptionTierResponse>;
    UpdateTierPrices(request: UpdateTierPricesRequest): Promise<SubscriptionTierResponse>;
    ToggleTierActive(request: ToggleTierActiveRequest): Promise<SubscriptionTierResponse>;
    GetTier(request: GetTierRequest): Promise<SubscriptionTierResponse>;
    GetCreatorTiers(request: GetCreatorTiersRequest): Promise<GetCreatorTiersResponse>;
    DeleteTier(request: DeleteTierRequest): Promise<SuccessResponse>;
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
