import "server-only";

import { hash } from "bcrypt";
import { where } from "firebase/firestore";

import { UserCredentials } from "@/entities/user";
import { addUser, getUsers } from "@/entities/user/server";
import { createSession } from "@/shared/lib/server";

export const signup = async ({ password, ...user }: UserCredentials) => {
    const hashedPassword = await hash(password, 10);

    const duplicate = await getUsers(where("email", "==", user.email));

    if (duplicate.length === 0) {
        let id = await addUser({ password: hashedPassword, ...user });
        if (id) {
            await createSession(id, user.email);

            return { ...user, id };
        } else {
            return { error: "User have not saved" };
        }
    } else {
        return { error: "User with this email already exists" };
    }
};
