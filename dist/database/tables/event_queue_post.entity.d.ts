export declare class EventQueuePost {
    id: string;
    exchange: string | null;
    queue: string | null;
    routingKey: string;
    correlationId?: string | null;
    payload: Record<string, unknown>;
    occurredAt: Date;
    publishedAt?: Date | null;
    publishAttempts: number;
    nextAttemptAt?: Date | null;
}
