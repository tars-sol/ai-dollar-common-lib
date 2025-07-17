export declare enum PaymentStatus {
    PENDING = "pending",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}
export declare class Payment {
    id: string;
    clientSecretKey: string;
    amount: number;
    currency: string;
    transactionId: string;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;
}
