import React from "react";
import { getMessages } from "next-intl/server";

import "../styles/reset.css";
import "../styles/globals.css";
import { geistMono, geistSans } from "../styles";
import { StoreProvider, IntlProvider } from "../providers";

export const RootLayout = async ({
    params: { locale },
    children,
}: Readonly<{
    params: { locale: string };
    children: React.ReactNode;
}>) => {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <IntlProvider locale={locale} messages={messages}>
                    <StoreProvider>{children}</StoreProvider>
                </IntlProvider>
            </body>
        </html>
    );
};
