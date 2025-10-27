export declare class EventQueueTask {
    id: string;
    routingKey: string;
    correlationId?: string | null;
    payload: Record<string, unknown>;
    occurredAt: Date;
    publishedAt?: Date | null;
    publishAttempts: number;
    nextAttemptAt?: Date | null;
    isSuccessful: boolean;
    failureReason?: string | null;
    successfulAt?: Date | null;
}
