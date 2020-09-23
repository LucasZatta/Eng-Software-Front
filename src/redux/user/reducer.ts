import { UserInitialState } from "./models";

const initialState: UserInitialState = {
  currentUser: null,
};

const UserState = (
  state = initialState,
  action: { type: any; payload: any }
): UserInitialState => {
  switch (action.type) {
    case "GET_USER_BY_CPF":
      return {
        ...state,
      };

    case "GET_USER_BY_CPF_SUCCESS":
      return {
        currentUser: action.payload,
      };

    case "GET_USER_BY_CPF_FAILURE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default UserState;
