import React, { Component } from 'react';

// This will import all parts needed for the Router to allow for navigation.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Importing all components to be used within this file.
import Wait from './Wait';
import Home from '../Home/Home';
import Games from '../Games/Games';
import SingleGame from '../SingleGame/SingleGame';

import '../styles/App.css';

const corsLink = "https://cors-anywhere.herokuapp.com/";
const apiLink = "https://api-v3.igdb.com/games/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numGames: 0,
    }
  }

  componentDidMount() {
    axios.get(`${corsLink}${apiLink}count`, {
      headers: {
        "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
        Accept: "application/json"
      }
    })
    .then(response => {
      // console.log(response.data.count);
      this.setState({ numGames: response.data.count });
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  render() {
    let gamePages = [];
    let i = 1;
    while (i <= Math.ceil(this.state.numGames/50)) {
      gamePages.push(`/Games/${i}`);
      i++;
    }
    // console.log(gamePages);
    const pages = gamePages.map(gp =>
      <Route key={gp} exact path={gp} component={Games} />
    );

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {pages}
          <Route exact path='/Games/SingleGame' component={SingleGame} />
          <Route render={() => <Wait /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
