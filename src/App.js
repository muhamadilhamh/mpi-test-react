
import './App.css';
import React from "react";
import Add from './Add';
import Home from './Home';
import Nav from './Nav';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {

return(
  <>
    <Nav />
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/add" component={ Add } />
        <Redirect to="/" />
    </Switch> 
  </>
);
}

export default App;
