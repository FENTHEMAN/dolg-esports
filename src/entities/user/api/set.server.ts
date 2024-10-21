import "server-only";

import { database } from "@/shared/api/server";
import { addDoc, collection } from "firebase/firestore";
import { UserCredentials } from "..";

export const addUser = async (user: UserCredentials) => {
    const docRef = await addDoc(collection(database, "users"), user);
    return docRef.id ? docRef.id : undefined;
};
