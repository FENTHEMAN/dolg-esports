import { UserCredentials } from "@/entities/user";
import { signin } from "@/features/auth/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { password, email }: UserCredentials = body;

    const result = await signin({ password, email });

    console.log(result);

    if (result && "error" in result) {
        return new Response(JSON.stringify({ error: result.error }));
    }

    return new Response(JSON.stringify(result));
}
