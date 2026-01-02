import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "subscription";
export interface SuccessResponse {
    success: boolean;
}
export interface CreateTierRequest {
    creatorId: string;
    name: string;
    description?: string | undefined;
    accessMask?: number | undefined;
    currency?: string | undefined;
    monthlyPriceCents: number;
    annualPriceCents: number;
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
    stripeProductId: string;
    monthlyStripePriceId: string;
    monthlyPriceCents: number;
    annualStripePriceId: string;
    annualPriceCents: number;
    currency: string;
    accessMask: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    creatorName?: string | undefined;
    creatorAvatarUrl?: string | undefined;
}
export interface CreateCheckoutSessionRequest {
    userId: string;
    tierId: string;
    interval: string;
}
export interface CreateCheckoutSessionResponse {
    url: string;
    sessionId: string;
}
export interface CreateCheckoutSecretRequest {
    userId: string;
    tierId: string;
    interval: string;
    role: string;
    roleId: string;
}
export interface CreateCheckoutSecretResponse {
    clientSecretKey: string;
}
export interface SubscriptionPaymentRequest {
    eventId: string;
    invoiceId: string;
    subscriptionId: string;
    customerId: string;
    amountPaid: string;
    currency: string;
    periodStart: number;
    periodEnd: number;
    paidAt: number;
    userId: string;
    creatorId: string;
    tierId: string;
    interval: string;
    role: string;
    roleId: string;
}
export interface CancelSubscriptionRequest {
    userId: string;
    creatorId: string;
}
export interface ChangeSubscriptionIntervalRequest {
    userId: string;
    creatorId: string;
    interval: string;
}
export interface GetUserSubscriptionsRequest {
    userId: string;
    onlyActive?: boolean | undefined;
}
export interface GetUserSubscriptionsResponse {
    subscriptions: UserSubscriptionItem[];
}
export interface UserSubscriptionItem {
    creatorId: string;
    creatorName: string;
    creatorUsername: string;
    creatorAvatarUrl?: string | undefined;
    tierName: string;
    subscriptionType: string;
    subscriptionChargesCents: number;
    currency: string;
    status: string;
    startedAt: string;
    nextBillingAt: string;
}
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const CreateTierRequest: MessageFns<CreateTierRequest>;
export declare const UpdateTierRequest: MessageFns<UpdateTierRequest>;
export declare const UpdateTierPricesRequest: MessageFns<UpdateTierPricesRequest>;
export declare const ToggleTierActiveRequest: MessageFns<ToggleTierActiveRequest>;
export declare const GetTierRequest: MessageFns<GetTierRequest>;
export declare const GetCreatorTiersRequest: MessageFns<GetCreatorTiersRequest>;
export declare const GetCreatorTiersResponse: MessageFns<GetCreatorTiersResponse>;
export declare const DeleteTierRequest: MessageFns<DeleteTierRequest>;
export declare const SubscriptionTierResponse: MessageFns<SubscriptionTierResponse>;
export declare const CreateCheckoutSessionRequest: MessageFns<CreateCheckoutSessionRequest>;
export declare const CreateCheckoutSessionResponse: MessageFns<CreateCheckoutSessionResponse>;
export declare const CreateCheckoutSecretRequest: MessageFns<CreateCheckoutSecretRequest>;
export declare const CreateCheckoutSecretResponse: MessageFns<CreateCheckoutSecretResponse>;
export declare const SubscriptionPaymentRequest: MessageFns<SubscriptionPaymentRequest>;
export declare const CancelSubscriptionRequest: MessageFns<CancelSubscriptionRequest>;
export declare const ChangeSubscriptionIntervalRequest: MessageFns<ChangeSubscriptionIntervalRequest>;
export declare const GetUserSubscriptionsRequest: MessageFns<GetUserSubscriptionsRequest>;
export declare const GetUserSubscriptionsResponse: MessageFns<GetUserSubscriptionsResponse>;
export declare const UserSubscriptionItem: MessageFns<UserSubscriptionItem>;
export interface SubscriptionService {
    CreateTier(request: CreateTierRequest): Promise<SubscriptionTierResponse>;
    UpdateTier(request: UpdateTierRequest): Promise<SubscriptionTierResponse>;
    UpdateTierPrices(request: UpdateTierPricesRequest): Promise<SubscriptionTierResponse>;
    ToggleTierActive(request: ToggleTierActiveRequest): Promise<SubscriptionTierResponse>;
    GetTier(request: GetTierRequest): Promise<SubscriptionTierResponse>;
    GetCreatorTiers(request: GetCreatorTiersRequest): Promise<GetCreatorTiersResponse>;
    DeleteTier(request: DeleteTierRequest): Promise<SuccessResponse>;
    CreateCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse>;
    CreateCheckoutSecret(request: CreateCheckoutSecretRequest): Promise<CreateCheckoutSecretResponse>;
    HandleSubscriptionPayment(request: SubscriptionPaymentRequest): Promise<SuccessResponse>;
    CancelSubscription(request: CancelSubscriptionRequest): Promise<SuccessResponse>;
    ChangeSubscriptionInterval(request: ChangeSubscriptionIntervalRequest): Promise<SuccessResponse>;
    GetUserSubscriptions(request: GetUserSubscriptionsRequest): Promise<GetUserSubscriptionsResponse>;
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
    CreateCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse>;
    CreateCheckoutSecret(request: CreateCheckoutSecretRequest): Promise<CreateCheckoutSecretResponse>;
    HandleSubscriptionPayment(request: SubscriptionPaymentRequest): Promise<SuccessResponse>;
    CancelSubscription(request: CancelSubscriptionRequest): Promise<SuccessResponse>;
    ChangeSubscriptionInterval(request: ChangeSubscriptionIntervalRequest): Promise<SuccessResponse>;
    GetUserSubscriptions(request: GetUserSubscriptionsRequest): Promise<GetUserSubscriptionsResponse>;
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
