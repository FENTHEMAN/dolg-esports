export type User = {
    id: string;
    name: string;
    email: string;
};

export type UserCredentials = {
    name?: string;
    email: string;
    password: string;
};

export type UserFull = {
    id: string;
    name: string;
    email: string;
    password: string;
};
