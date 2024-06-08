import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BugList from './components/BugList';
import BugForm from './components/BugForm';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bug Tracking System</h1>
        </header>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/bugs" component={BugList} />
          <Route path="/bug/:id?" component={BugForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
