import { Property } from "./models";

const actions = {
  FETCH_PROPERTIES:
    "[Property] Fetch Properties",
  FETCH_PROPERTIES_SUCCESS:
    "[Property] Fetch Properties Success",
  FETCH_PROPERTIES_FAILURE:
    "[Property] Fetch Properties Failure",
  SET_CITY_NAME:
    "[Property] Set City Name",

  fetchProperties: () => ({
    type: "FETCH_PROPERTIES"
  }),

  fetchPropertiesSuccess: (properties: Property[]) => ({
    type: "FETCH_PROPERTIES_SUCCESS",
    payload: properties,
  }),

  fetchPropertiesFailure: (error: string) => ({
    type: "FETCH_PROPERTIES_FAILURE",
    payload: error,
  }),

  setCityName: (cityName: string) => ({
    type: "SET_CITY_NAME",  
    payload: cityName,
  }),
  
};

export default actions;
export const PropertyActions = actions;
