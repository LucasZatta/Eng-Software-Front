import axios from "axios";
import { User } from "./models";

const apiURL = "http://localhost:3000/auth";

export const getUserMe = (userCpf: string) => {
  return axios.get<User>(`${apiURL}/getUserId/${userCpf}`);
};

export const postUser = (user: User) => {
  //console.log()
  return axios.post<User>(`${apiURL}/register`, user);
};
