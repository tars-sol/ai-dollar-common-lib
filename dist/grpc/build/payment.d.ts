import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "payment";
export interface PayoutRequest {
    brandId: string;
    campaignId: string;
    payoutAmounts: PayoutAmount[];
    isEqual: boolean;
}
export interface PayoutAmount {
    profileId: string;
    amount?: string | undefined;
}
export interface RefundRequest {
    campaignId: string;
}
export interface SuccessResponse {
    success: boolean;
}
export interface CreatePaymentIntentRequest {
    brandId: string;
    campaignId: string;
}
export interface PaymentIntentResponse {
    clientSecretKey?: string | undefined;
}
export interface PaymentIntentEvent {
    id: string;
    amountReceived: string;
    currency: string;
    status: string;
    clientSecret?: string | undefined;
    eventType: string;
    brandId: string;
}
export interface PaymentRefundEvent {
    id: string;
    status: string;
}
export interface StripeResponse {
    success: boolean;
    message: string;
}
export interface ConnectedAccountRequest {
    email: string;
    profileId: string;
}
export interface ConnectAccountResponse {
    accountId: string;
    email: string;
    isActive: boolean;
    onBoardingUrl: string;
    requiredFields: string[];
}
export interface GetProfilePayoutHistoryRequest {
    profileId: string;
    pageNumber: number;
    pageSize: number;
}
export interface ProfilePayoutHistoryItem {
    campaignName: string;
    brandName: string;
    brandLogo: string;
    campaignCreatedDate: string;
    campaignEndDate: string;
    paymentDate: string;
    amount: string;
}
export interface GetProfilePayoutHistoryResponse {
    items: ProfilePayoutHistoryItem[];
    totalItems: number;
}
export declare const PayoutRequest: MessageFns<PayoutRequest>;
export declare const PayoutAmount: MessageFns<PayoutAmount>;
export declare const RefundRequest: MessageFns<RefundRequest>;
export declare const SuccessResponse: MessageFns<SuccessResponse>;
export declare const CreatePaymentIntentRequest: MessageFns<CreatePaymentIntentRequest>;
export declare const PaymentIntentResponse: MessageFns<PaymentIntentResponse>;
export declare const PaymentIntentEvent: MessageFns<PaymentIntentEvent>;
export declare const PaymentRefundEvent: MessageFns<PaymentRefundEvent>;
export declare const StripeResponse: MessageFns<StripeResponse>;
export declare const ConnectedAccountRequest: MessageFns<ConnectedAccountRequest>;
export declare const ConnectAccountResponse: MessageFns<ConnectAccountResponse>;
export declare const GetProfilePayoutHistoryRequest: MessageFns<GetProfilePayoutHistoryRequest>;
export declare const ProfilePayoutHistoryItem: MessageFns<ProfilePayoutHistoryItem>;
export declare const GetProfilePayoutHistoryResponse: MessageFns<GetProfilePayoutHistoryResponse>;
export interface PaymentService {
    CreatePaymentIntent(request: CreatePaymentIntentRequest): Promise<PaymentIntentResponse>;
    HandlePaymentIntent(request: PaymentIntentEvent): Promise<StripeResponse>;
    HandlePaymentRefund(request: PaymentRefundEvent): Promise<StripeResponse>;
    CreateConnectedAccount(request: ConnectedAccountRequest): Promise<ConnectAccountResponse>;
    GetConnectedAccount(request: ConnectedAccountRequest): Promise<ConnectAccountResponse>;
    SendPayout(request: PayoutRequest): Promise<SuccessResponse>;
    Health(request: Empty): Promise<SuccessResponse>;
    RefundPayment(request: RefundRequest): Promise<SuccessResponse>;
    GetProfilePayoutHistory(request: GetProfilePayoutHistoryRequest): Promise<GetProfilePayoutHistoryResponse>;
}
export declare const PaymentServiceServiceName = "payment.PaymentService";
export declare class PaymentServiceClientImpl implements PaymentService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreatePaymentIntent(request: CreatePaymentIntentRequest): Promise<PaymentIntentResponse>;
    HandlePaymentIntent(request: PaymentIntentEvent): Promise<StripeResponse>;
    HandlePaymentRefund(request: PaymentRefundEvent): Promise<StripeResponse>;
    CreateConnectedAccount(request: ConnectedAccountRequest): Promise<ConnectAccountResponse>;
    GetConnectedAccount(request: ConnectedAccountRequest): Promise<ConnectAccountResponse>;
    SendPayout(request: PayoutRequest): Promise<SuccessResponse>;
    Health(request: Empty): Promise<SuccessResponse>;
    RefundPayment(request: RefundRequest): Promise<SuccessResponse>;
    GetProfilePayoutHistory(request: GetProfilePayoutHistoryRequest): Promise<GetProfilePayoutHistoryResponse>;
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
