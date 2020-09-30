import { ofType } from "redux-observable";
import { concatMap, map } from "rxjs/operators";
import { PropertyActions } from "./actions";
import { Property } from "./models";
import { getPropertyByCity } from "./service";

export interface Action<T = undefined> {
  type: string;
  payload?: T;
}

const onFetchProperties = () => {
  return getPropertyByCity()
    .then((response) => {
      console.log("resposta:  " + response);
      return PropertyActions.fetchPropertiesSuccess((response as unknown) as Property[]);
    })
    .catch((error) => {
      console.log("ERRO: " + error);
      return PropertyActions.fetchPropertiesFailure((error as unknown) as string);
    });
};

export const handleFetchProperties = (action$: any) =>
  action$.pipe(
    ofType("FETCH_PROPERTIES"),
    map((action: Action<object>) => action.payload),
    concatMap(() => onFetchProperties())
  );
