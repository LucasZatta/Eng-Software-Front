import { combineEpics } from "redux-observable";
import { handleLogIn, handleRegisterUser } from "./user/epics";
import { handleFetchProperties, handleRegisterProperty} from "./property/epics";

export default combineEpics(handleLogIn, handleRegisterUser, handleFetchProperties, handleRegisterProperty);



