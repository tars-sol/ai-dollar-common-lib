export declare enum TokenType {
    ACCESS = "access",
    REFRESH = "refresh"
}
export declare class RevokedToken {
    id: string;
    jti: string;
    tokenHash: string;
    userId: string | null;
    tokenType: TokenType;
    expiresAt: Date;
    revokedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
