import { User, UserCredentials } from "@/entities/user";
import { api } from "@/shared/api";

export const register = async ({ email, password, name }: UserCredentials) => {
    const result: User | { error: string } = await api(
        process.env.NEXT_PUBLIC_URL! + "/api/signup",
        {
            method: "POST",
            body: JSON.stringify({
                password,
                email,
                name,
            }),
        }
    );

    return result;
};
