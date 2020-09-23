import { Property } from "./models";

const actions = {
  GET_USER_PROPERTIES: "[Property] Get Properties by Logged User",
  GET_USER_PROPERTIES_SUCCESS:
    "[Property] Get Properties by Logged User Success",
  GET_USER_PROPERTIES_FAILURE:
    "[Property] Get Properties by Logged User Failure",

  getLoggedUserProperties: (userCPF: string) => ({
    type: "GET_USER_PROPERTIES",
    payload: userCPF,
  }),

  getLoggedUserPropertiesSuccess: (properties: Property[]) => ({
    type: "GET_USER_PROPERTIES_SUCCESS",
    payload: properties,
  }),

  getLoggedUserPropertiesFailure: (error: string) => ({
    type: "GET_USER_PROPERTIES_FAILURE",
    payload: error,
  }),
};

export default actions;
export const PropertyActions = actions;
