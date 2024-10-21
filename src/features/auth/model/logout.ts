"use server";

import { redirect } from "@/shared/lib";
import { deleteSession } from "@/shared/lib/server";

export const logout = () => {
    deleteSession();
    redirect("/");
};
