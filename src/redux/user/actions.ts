import { User } from "./models";

const actions = {
  REGISTER_USER: "[User] Register User",
  REGISTER_USER_SUCCESS: "[User] Register User Success",
  REGISTER_USER_FAILURE: "[User] Register User Failure",
  LOG_IN_USER: "[User] Log in User",
  LOG_IN_USER_SUCCESS: "[User] Log in User Success",
  LOG_IN_USER_FAILURE: "[User] Log in User Failure",


  registerUser: (user: User) => ({
    type: "REGISTER_USER",
    payload: user,
  }),
  registerUserSuccess: (user: User) => ({
    type: "REGISTER_USER_SUCCESS",
    payload: user,
  }),
  registerUserFailure: (error: string) => ({
    type: "REGISTER_USER_FAILURE",
    payload: error,
  }),
  logInUser: (user: any) => ({
    type: "LOG_IN_USER",
    payload: user,
  }),
  logInUserSuccess: (user: User) => ({
    type: "LOG_IN_USER_SUCCESS",
    payload: user,
  }),
  logInUserFailure: (error: string) => ({
    type: "LOG_IN_USER_FAILURE",
    payload: error,
  }),
  
};

export default actions;
export const UserActions = actions;
