export type SessionPayload = {
    userId: string;
    email: string;
    expiresAt: Date;
};

export type Session = string | undefined;
