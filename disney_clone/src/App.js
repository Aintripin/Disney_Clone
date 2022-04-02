import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />

      <Switch>

        <Route path = "/login">
          <Login />
        </Route>

        <Route path = "/detail">
          <Detail />
        </Route>

        <Route path = "/">
          <Home />
        </Route>


      </Switch>
      
    </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
