import { ofType } from "redux-observable";
import { concatMap, map } from "rxjs/operators";
import { PropertyActions } from "./actions";
import { Property } from "./models";
import { getPropertyByCity, postProperty } from "./service";

export interface Action<T = undefined> {
  type: string;
  payload?: T;
}

const onFetchProperties = () => {
  return getPropertyByCity()
    .then((response) => {
      console.log(response);
      return PropertyActions.fetchPropertiesSuccess((response as unknown) as Property[]);
    })
    .catch((error) => {  
      console.log(error)    
      return PropertyActions.fetchPropertiesFailure((error as unknown) as string);
    });
};

export const handleFetchProperties = (action$: any) =>
  action$.pipe(
    ofType("FETCH_PROPERTIES"),
    map((action: Action<object>) => action.payload),
    concatMap(() => onFetchProperties())
  );

const onRegisterProperty = (property: Property) => {
  return postProperty(property)
  .then((response) => {
    return PropertyActions.registerPropertySuccess((response as unknown) as Property);
  })
  .catch((error) => {
    return PropertyActions.registerPropertyFailure((error as unknown) as string);
  });
};

export const handleRegisterProperty = (action$: any) => 
  action$.pipe(
    ofType("REGISTER_PROPERTY"),
    map((action: Action<object>) => action.payload),
    concatMap((newProperty: Property) => onRegisterProperty(newProperty))
  );
