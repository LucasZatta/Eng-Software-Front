import { handleFetchProperties } from "./epics";
import { PropertyInitialState } from "./models";

const initialState: PropertyInitialState = {
  properties: [],
  cityName: null,
  error: null,
};

const PropertyState = (
  state = initialState,
  action: { type: any; payload: any }
): PropertyInitialState => {
  switch (action.type) {
    case "FETCH_PROPERTIES":
      return{
        ...state,
        error: null,
      };
    case "FETCH_PROPERTIES_SUCCESS":
      return{
        ...state,
        properties: action.payload
      };
    case "FETCH_PROPERTIES_FAILURE":
      return{
        ...state,
        error: action.payload
      };
    case "SET_CITY_NAME":
      return{
        ...state,
        cityName: action.payload
      };
    case "REGISTER_PROPERTY":
      return{
        ...state,
        error: null,
      };
    case "REGISTER_PROPERTY_SUCCESS":
      return{
        ...state,
        properties: [...state.properties,action.payload]
      };
    case "REGISTER_PROPERTY_FAILURE":
      return{
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PropertyState;
