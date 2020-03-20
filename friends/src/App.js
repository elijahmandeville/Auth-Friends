import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
