import type { Metadata } from "next";

import { RootLayout } from "@/application/layouts";
import { routing } from "@/shared/lib";

import { getTranslations } from "next-intl/server";
import { GenerateMetadataFn } from "@/shared/types";

export const generateStaticParams = () => {
    return routing.locales.map(locale => ({ locale }));
};

export const generateMetadata: GenerateMetadataFn = async ({
    params: { locale },
}) => {
    const translate = await getTranslations({ locale, namespace: "Metadata" });

    return {
        title: translate("title"),
    };
};

export default RootLayout;

