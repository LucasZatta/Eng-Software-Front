import axios from "axios";
import { User } from "./models";

const apiURL = "localhost/3001/auth";

export const getUserMe = (userCpf: string) => {
  return axios.get<User>(`${apiURL}/getUserId/${userCpf}`);
};

export const postUser = (user: User) => {
  return axios.post<User>(`${apiURL}/register`, user);
};
