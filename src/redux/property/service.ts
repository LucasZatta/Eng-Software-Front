import axios from "axios";
import { Property } from "./models";

const apiURL = "http://localhost:3000/property";

export const getPropertyByCity = () => {
  return axios.get<Property[]>(`${apiURL}/getByCity`);
};

export const postProperty = (property: Property) => {
    return axios.post<Property>(`${apiURL}/register`, property);
};
