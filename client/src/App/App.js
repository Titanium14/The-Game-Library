import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Games from '../Games/Games';
import SingleGame from '../SingleGame/SingleGame';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Games/1' component={Games} />
          <Route exact path='/Games/2' component={Games} />
          <Route exact path='/Games/3' component={Games} />
          <Route exact path='/Games/4' component={Games} />
          <Route exact path='/Games/5' component={Games} />
          <Route exact path='/Games/SingleGame' component={SingleGame} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
