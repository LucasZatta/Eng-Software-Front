import { act } from "react-dom/test-utils";
import { UserInitialState } from "./models";

const initialState: UserInitialState = {
  currentUser: null,
  error: null,
};

const UserState = (
  state = initialState,
  action: { type: any; payload: any }
): UserInitialState => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
      };

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOG_IN_USER":
      return {
        ...state,
      };

    case "LOG_IN_USER_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "LOG_IN_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default UserState;
