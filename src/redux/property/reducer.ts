import { PropertyInitialState } from "./models";

const initialState: PropertyInitialState = {
  propertiesByUser: [],
  error: null,
};

const PropertyState = (
  state = initialState,
  action: { type: any; payload: any }
): PropertyInitialState => {
  switch (action.type) {
    case "GET_USER_PROPERTIES":
      return {
        ...state,
      };

    case "GET_USER_PROPERTIES_SUCCESS":
      return {
        ...state,
        propertiesByUser: action.payload,
        error: null,
      };

    case "GET_USER_PROPERTIES_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default PropertyState;
