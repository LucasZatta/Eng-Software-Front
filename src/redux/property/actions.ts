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
  REGISTER_PROPERTY:
    "[Property] Register Property",
  REGISTER_PROPERTY_SUCCESS:
    "[Property] Register Property Success",
  REGISTER_PROPERTY_FAILURE:
    "[Property] Register Property FAILURE",

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

  registerProperty: (property: Property) => ({
    type:"REGISTER_PROPERTY",
    payload: property,
  }),
  
  registerPropertySuccess: (property: Property) => ({
    type:"REGISTER_PROPERTY_SUCCESS",
    payload: property,
  }),

  registerPropertyFailure: (error: string) => ({
    type:"REGISTER_PROPERTY_FAILURE",
    payload: error,
  }),

  
  
};

export default actions;
export const PropertyActions = actions;
