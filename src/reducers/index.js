import { combineReducers } from "redux";
import auth from "./auth";
import messages from "./messages";

export default combineReducers({ auth, messages });

export const getMessages = (state) => {
    return state.messages;
}
export const getUsername = (state) => {
    return state.auth.user.name;
}
export const getAvatar = (state) => {
    return state.auth.user.avatar;
}