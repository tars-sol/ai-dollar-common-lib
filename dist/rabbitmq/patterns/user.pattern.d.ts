export declare const UserPattern: {
    CREATE: {
        readonly cmd: "user.create";
    };
    UPDATE: {
        readonly cmd: "user.update";
    };
    DELETE: {
        readonly cmd: "user.delete";
    };
};
export type UserPattern = typeof UserPattern[keyof typeof UserPattern];
