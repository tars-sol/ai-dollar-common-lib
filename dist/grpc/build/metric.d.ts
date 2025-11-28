import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "metric";
export interface GetProfileMetricsRequest {
    profileId: string;
    range: string;
    userId: string;
}
export interface ProfileMetricsResponse {
    metric: string;
    range: string;
    points: MetricPoint[];
    changePercentage: number;
    totalValue: string;
}
export interface MetricPoint {
    date: string;
    label: string;
    value: string;
}
export declare const GetProfileMetricsRequest: MessageFns<GetProfileMetricsRequest>;
export declare const ProfileMetricsResponse: MessageFns<ProfileMetricsResponse>;
export declare const MetricPoint: MessageFns<MetricPoint>;
export interface MetricsService {
    GetProfileEarningsMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileViewsMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileFollowersMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileSubscribersMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
}
export declare const MetricsServiceServiceName = "metric.MetricsService";
export declare class MetricsServiceClientImpl implements MetricsService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetProfileEarningsMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileViewsMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileFollowersMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileSubscribersMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
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
