import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Demo from './Demo';
import Details from './Details';
import './App.css';

const App = () => {
  return (
    <div className='container mt-5'>
      <Router>
       <Switch>
       <Route path="/" exact >
            <Demo />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
        </Router>
    </div>
  );
};

export default App;
