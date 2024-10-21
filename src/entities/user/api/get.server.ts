import "server-only";

import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";

import { database } from "@/shared/api/server";
import { UserFull } from "..";

export const getUserById = async (id: string) => {
    const docRef = doc(database, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as UserFull;
    } else {
        return undefined;
    }
};

export const getUsers = async (searchWhere?: ReturnType<typeof where>) => {
    const q = searchWhere
        ? query(collection(database, "users"), searchWhere)
        : query(collection(database, "users"));

    const users: UserFull[] = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        users.push({
            id: doc.id,
            ...doc.data(),
        } as UserFull);
    });

    return users;
};
