import { combineEpics } from "redux-observable";
import { handleGetUserMe, handleRegisterUser } from "./user/epics";

export default combineEpics(handleGetUserMe, handleRegisterUser);
