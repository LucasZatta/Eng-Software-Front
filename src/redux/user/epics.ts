import { notification } from "antd";
import { ofType } from "redux-observable";
import { merge, of } from "rxjs";
import { catchError, concatMap, delay, map, withLatestFrom } from "rxjs/operators";
import { UserActions } from "./actions";
import { User, user_type } from "./models";
import { getUserMe, postUser } from "./service";

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

const getUserMeByCpf = (cpf: string) => {
  return getUserMe(cpf)
    .then((response) => {
      console.log(response);
      return UserActions.getUserMeSuccess(aa);
    })
    .catch((error) => {
      console.log(error);
      return of(UserActions.getUserMeFailure(error));
    });
};

export const handleGetUserMe = (action$: any) =>
  action$.pipe(
    ofType("GET_USER_ME"),
    map((action: Action<object>) => action.payload),
    concatMap((payload: string) => getUserMeByCpf(payload))
  );

const onRegisterUser = (user: User) => {
  return postUser(user)
    .then((response) => {
      console.log("resposta:  " + response);
      return UserActions.registerUserSuccess(user);
    })
    .catch((error) => {
      console.log("ERRO: " + error);
      return UserActions.registerUserFailure(error);
    });
};

export const handleRegisterUser = (action$: any) =>
  action$.pipe(
    ofType("REGISTER_USER"),
    map((action: Action<object>) => action.payload),
    concatMap((newUser: User) => onRegisterUser(newUser))
  );
