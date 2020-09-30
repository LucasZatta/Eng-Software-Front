import { ofType } from "redux-observable";
import { of } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import { UserActions } from "./actions";
import { User, user_type } from "./models";
import { logInUser, postUser } from "./service";

const aa = {
  name: "camilla",
  cpf: "08015456681",
  phone: "319999999",
  email: "camilla@g.com",
  password: "12234",
  type: [user_type.OWNER, user_type.RENTER],
};

export interface Action<T = undefined> {
  type: string;
  payload?: T;
}

const onRegisterUser = (user: User) => {
  return postUser(user)
    .then((response) => {
      return UserActions.registerUserSuccess(user);
    })
    .catch((error) => {
      return UserActions.registerUserFailure(error);
    });
};

export const handleRegisterUser = (action$: any) =>
  action$.pipe(
    ofType("REGISTER_USER"),
    map((action: Action<object>) => action.payload),
    concatMap((newUser: User) => onRegisterUser(newUser))
  );

const onLogIn = (user: any) => {
  return logInUser(user)
    .then((response) => {
      return UserActions.logInUserSuccess(response.data.data as unknown as User);
    })
    .catch((error) => {
      return UserActions.logInUserFailure(error);
    });
};

export const handleLogIn = (action$: any) => 
  action$.pipe(
    ofType("LOG_IN_USER"),
    map((action: Action<object>) => action.payload),
    concatMap((newInfo: any) => onLogIn(newInfo))
  );
