import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "metrics";
export declare enum MetricRange {
    METRIC_RANGE_UNSPECIFIED = 0,
    WEEK = 1,
    MONTH = 2,
    YEAR = 3,
    UNRECOGNIZED = -1
}
export declare function metricRangeFromJSON(object: any): MetricRange;
export declare function metricRangeToJSON(object: MetricRange): string;
export declare enum MetricKind {
    METRIC_KIND_UNSPECIFIED = 0,
    EARNINGS = 1,
    VIEWS = 2,
    FOLLOWERS = 3,
    SUBSCRIBERS = 4,
    UNRECOGNIZED = -1
}
export declare function metricKindFromJSON(object: any): MetricKind;
export declare function metricKindToJSON(object: MetricKind): string;
export interface GetProfileMetricsRequest {
    profileId: string;
    range: MetricRange;
}
export interface ProfileMetricsResponse {
    metric: MetricKind;
    range: MetricRange;
    points: MetricPoint[];
}
export interface MetricPoint {
    date: string;
    label: string;
    value: string;
}
export interface MetricsHealthResponse {
    isHealthy: boolean;
}
export declare const GetProfileMetricsRequest: MessageFns<GetProfileMetricsRequest>;
export declare const ProfileMetricsResponse: MessageFns<ProfileMetricsResponse>;
export declare const MetricPoint: MessageFns<MetricPoint>;
export declare const MetricsHealthResponse: MessageFns<MetricsHealthResponse>;
export interface MetricsService {
    GetProfileEarningsMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileViewsMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileFollowersMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    GetProfileSubscribersMetrics(request: GetProfileMetricsRequest): Promise<ProfileMetricsResponse>;
    Health(request: Empty): Promise<MetricsHealthResponse>;
}
export declare const MetricsServiceServiceName = "metrics.MetricsService";
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
    Health(request: Empty): Promise<MetricsHealthResponse>;
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
