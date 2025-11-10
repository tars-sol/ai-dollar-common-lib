export declare const RmqQueue: {
    readonly USER: "user_queue";
    readonly TASK: "task_queue";
    readonly SUBSCRIPTION: "subscription_queue";
};
export type RmqQueue = typeof RmqQueue[keyof typeof RmqQueue];
