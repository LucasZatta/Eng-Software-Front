import { User } from "./models";

const actions = {
  GET_USER_BY_CPF: "[User] Get User By Cpf",
  GET_USER_BY_CPF_SUCCESS: "[User] Get User By Cpf Success",
  GET_USER_BY_CPF_FAILURE: "[User] Get User By Cpf Failure",

  getUserByCpf: (userCpf: string) => ({
    type: "GET_USER_BY_CPF",
    payload: userCpf,
  }),
  getUserByCpfSuccess: (user: User) => ({
    type: "GET_USER_BY_CPF_SUCCESS",
    payload: user,
  }),
  getUserByCpfFailure: (error: string) => ({
    type: "GET_USER_BY_CPF_FAILURE",
    payload: error,
  }),
};

export default actions;
export const UserActions = actions;
