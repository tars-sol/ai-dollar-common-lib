export declare const RmqQueue: {
    readonly USER: "task_queue";
    readonly TASK: "task_queue";
};
export type RmqQueue = typeof RmqQueue[keyof typeof RmqQueue];
