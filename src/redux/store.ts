import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory as createHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createEpicMiddleware } from "redux-observable";
import Reducers from "./reducer";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware();
const middlewares = [routeMiddleware, epicMiddleware];

const createRootReducer = () =>
  combineReducers({
    router: connectRouter(history),
    ...Reducers,
  });

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
