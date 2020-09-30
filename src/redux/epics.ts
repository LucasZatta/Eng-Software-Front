import { combineEpics } from "redux-observable";
import { handleLogIn, handleRegisterUser } from "./user/epics";

export default combineEpics(handleLogIn, handleRegisterUser);



