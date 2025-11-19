export declare const RMQ_CLIENT: {
    TASK_CLIENT: string;
    POST_CLIENT: string;
    SUBSCRIPTION_CLIENT: string;
};
export type RMQ_CLIENT = (typeof RMQ_CLIENT)[keyof typeof RMQ_CLIENT];
