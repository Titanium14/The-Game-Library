import React, { Component } from 'react';
// This will import all parts needed for the Router to allow for navigation.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing the custom styles in.
import '../styles/App.css';

// Importing all components to be used within this file.
import LoadingSpinner from './LoadingSpinner';
import Home from '../Home/Home';
import Games from '../Games/Games';
import SingleGame from '../SingleGame/SingleGame';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Games' component={Games} />
          <Route exact path='/Games/SingleGame' component={SingleGame} />
          <Route render={() => <LoadingSpinner /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
