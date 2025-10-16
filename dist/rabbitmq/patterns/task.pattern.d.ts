export declare const TaskPattern: {
    FOLLOW: {
        readonly cmd: "task.follow";
    };
    LIKE: {
        readonly cmd: "task.like";
    };
    COMMENT: {
        readonly cmd: "task.comment";
    };
    SUBSCRIBE: {
        readonly cmd: "task.subscribe";
    };
    POST: {
        readonly cmd: "task.post";
    };
};
export type TaskPattern = typeof TaskPattern[keyof typeof TaskPattern];
