export type { User, UserCredentials, UserFull } from "./model/user.types";

export {
    setUser,
    userSelector,
    default as userReducer,
} from "./model/user.slice";
