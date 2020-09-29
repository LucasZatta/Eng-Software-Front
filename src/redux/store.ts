import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory as createHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createEpicMiddleware } from "redux-observable";
<<<<<<< HEAD
import thunk from "redux-thunk";
=======
import epics from "./epics";
>>>>>>> abd3cd25228cda28ccb2a9404eac4931a95ad608
import Reducers from "./reducer";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware();
const middlewares = [thunk, routeMiddleware, epicMiddleware];

const createRootReducer = () =>
  combineReducers({
    router: connectRouter(history),
    ...Reducers,
  });

const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(...middlewares)));

epicMiddleware.run(epics);

export default store;
