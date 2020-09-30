
import { ofType } from "redux-observable";
import { of } from "rxjs";
import { concatMap, map } from "rxjs/operators";


export interface Action<T = undefined> {
    type: string;
    payload?: T;
  }
