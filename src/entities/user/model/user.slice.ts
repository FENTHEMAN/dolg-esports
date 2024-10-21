import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "..";
import { RootState } from "@/shared/types";

const initialState: User = {
    id: "",
    email: "",
    name: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state = { ...state, ...action.payload };
        },
    },
});

export const { setUser } = userSlice.actions;

export const userSelector = (state: RootState) => state;

export default userSlice.reducer;
