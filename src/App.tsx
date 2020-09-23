import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./containers/home/home";
import User from "./containers/user/user";
import About from "./containers/About";
import Nav from "./components/nav/nav";
import Property from "./containers/property/property";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="global-style">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/user" component={User} />
            <Route path="/new-property" exact={false} component={Property} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
