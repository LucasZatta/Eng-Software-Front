import { User } from "./models";

const actions = {
  GET_USER_ME: "[User] Get User Me",
  GET_USER_ME_SUCCESS: "[User] Get User Me",
  GET_USER_ME_FAILURE: "[User] Get User Me",
  REGISTER_USER: "[User] Register User",
  REGISTER_USER_SUCCESS: "[User] Register User Success",
  REGISTER_USER_FAILURE: "[User] Register User Failure",

  getUserMe: (userCpf: string) => ({
    type: "GET_USER_BY_CPF",
    payload: userCpf,
  }),
  getUserMeSuccess: (user: User) => ({
    type: "GET_USER_BY_CPF_SUCCESS",
    payload: user,
  }),
  getUserMeFailure: (error: string) => ({
    type: "GET_USER_BY_CPF_FAILURE",
    payload: error,
  }),

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
};

export default actions;
export const UserActions = actions;
