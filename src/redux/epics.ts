import { combineEpics } from "redux-observable";
import { handleGetUserMe, handleRegisterUser } from "./user/epics";
import { handleFetchProperties } from "./property/epics";

export default combineEpics(handleGetUserMe, handleRegisterUser, handleFetchProperties);
