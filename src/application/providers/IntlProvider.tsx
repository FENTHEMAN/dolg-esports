import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export const IntlProvider = ({
    locale,
    messages,
    children,
}: Readonly<{
    locale: string;
    messages: AbstractIntlMessages;
    children: React.ReactNode;
}>) => {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
};
