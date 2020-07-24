import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tenant} from './components/engineering/manageTenants'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import India from './components/India';
import World from './components/World';

function App() {
  return (
    <div class="container-fluid">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <India />
          </Route>
          <Route path="/india">
            <India />
          </Route>
          <Route path="/world">
            <World />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
