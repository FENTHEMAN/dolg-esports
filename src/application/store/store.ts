import { userReducer } from "@/entities/user";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
        },
    });
};
