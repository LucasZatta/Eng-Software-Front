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
      }

    default:
      return state;
  }
};

export default PropertyState;
