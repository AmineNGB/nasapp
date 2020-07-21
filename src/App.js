import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from "./components/Home"
import NasaPhoto from "./components/NasaPhoto"
import NotFound from "./components/NotFound"
import './App.css';

function App() {
  return (
    <HashRouter>
        <Switch>
        <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" exact /> 
        </div>  
        <Route component={NotFound} />
        </Switch>
      </HashRouter>
  );
}

export default App;
