import axios from "axios";
import { Property } from "./models";

const apiURL = "http://localhost:3000/property";

export const fetchProperties = () => {
  return axios.get<any>(`${apiURL}/getByCity`);
};

export const postProperty = (property: Property) => {
  return axios.post<Property>(`${apiURL}/register`, property);
};
