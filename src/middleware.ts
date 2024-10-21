import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { locales, protectedRoutes, publicRoutes } from "./shared/data";
import { decryptSession } from "./shared/lib/server";

export default async function middleware(request: NextRequest) {
    const defaultLocale = request.headers.get("x-dolg-locale") || "en";

    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale,
    });
    const response = handleI18nRouting(request);

    response.headers.set("x-dolg-locale", defaultLocale);

    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    console.log(path, "protected", isProtectedRoute);

    const isPublicRoute = publicRoutes.includes(path);
    console.log(path, "public", isPublicRoute);

    const cookie = cookies().get("session")?.value;
    const session = await decryptSession(cookie);

    if (isProtectedRoute && !session?.userId && !session?.email) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    return response;
}

export const config = {
    matcher: [
        "/",
        "/(ru|en)/:path*",
        "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    ],
};
