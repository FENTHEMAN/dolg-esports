import { User, UserCredentials } from "@/entities/user";
import { api } from "@/shared/api";

export const login = async ({ password, email }: UserCredentials) => {
    const result: User | { error: string } = await api(
        process.env.NEXT_PUBLIC_URL! + "/api/signin",
        {
            method: "POST",
            body: JSON.stringify({
                password,
                email,
            }),
        }
    );

    return result;
};
