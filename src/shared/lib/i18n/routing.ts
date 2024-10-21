import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "./../../data";

export const routing = defineRouting({
    locales,

    defaultLocale: locales[0],
});

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);
