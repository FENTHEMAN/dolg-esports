import { locales } from "./locales";

const routesWithLocales = (routes: string[], locales: string[]): string[] => {
    const routesWithLocalesArr = [];

    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < locales.length; j++) {
            routesWithLocalesArr.push(`/${locales[j]}${routes[i]}`);
        }
    }

    return routesWithLocalesArr;
};

export const protectedRoutes = routesWithLocales(["/profile"], locales);

export const publicRoutes = routesWithLocales(
    ["/login", "/signup", ""],
    locales
);
