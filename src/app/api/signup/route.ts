import { NextRequest } from "next/server";

import { signup } from "@/features/auth/server";
import { UserCredentials } from "@/entities/user";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { password, ...user }: UserCredentials = body;

    const result = await signup({ password, ...user });

    console.log(result);

    if (result && result.error) {
        return new Response(JSON.stringify({ error: result.error }));
    }

    return new Response(JSON.stringify({ ...result }));
}
