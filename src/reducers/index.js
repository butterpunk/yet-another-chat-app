import { combineReducers } from "redux";
import auth from "./auth";
import messages from "./messages";

export default combineReducers({ auth, messages });

export const getMessages = (state) => {
    return state.messages;
}
export const getUser = (state) => {
    return {name: state.auth.user.name, avatar: state.auth.user.avatar}
}