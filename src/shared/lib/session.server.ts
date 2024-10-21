import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SessionPayload, Session } from "../types";

const secretKey = process.env.SECRET_SESSION;
const encodedKey = new TextEncoder().encode(secretKey);

export const encryptSession = async (payload: SessionPayload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey);
};

export const decryptSession = async (session: Session = "") => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload as SessionPayload;
    } catch (error) {
        console.log(error);
    }
};

export async function createSession(userId: string, email: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encryptSession({ userId, expiresAt, email });
    cookies().set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });
}

export const updateSession = async () => {
    const session = cookies().get("session")?.value;
    const payload = await decryptSession(session);

    if (!session || !payload) {
        return null;
    }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    cookies().set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: "lax",
        path: "/",
    });
};

export const deleteSession = () => {
    cookies().delete("session");
};

export const verifySession = async () => {
    const cookie = cookies().get("session")?.value;
    const session = await decryptSession(cookie);

    if (!session?.userId) {
        redirect("/login");
    }

    return { isAuth: true, userId: session.userId, email: session.email };
};
