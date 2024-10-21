import "server-only";

import { compare } from "bcrypt";
import { where } from "firebase/firestore";

import { UserCredentials } from "@/entities/user";
import { getUsers } from "@/entities/user/server";
import { createSession } from "@/shared/lib/server";

export const signin = async ({ email, password }: UserCredentials) => {
    const users = await getUsers(where("email", "==", email));

    if (users.length === 0) {
        return { error: "User with this email does not exist" };
    }

    const user = users[0];

    const isPasswordValid = await compare(password, user.password);

    if (isPasswordValid) {
        await createSession(user.id, user.email);

        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    } else {
        return { error: "Invalid password" };
    }
};
