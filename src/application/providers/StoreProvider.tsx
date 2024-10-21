"use client";

import { AppStore } from "@/shared/types";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../store";

export const StoreProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
};
