import React, { Component } from 'react';
// This will import all parts needed for the Router to allow for navigation.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// This will import axios to be use to fetch data from an API.
import axios from 'axios';

// Importing the custom styles in.
import '../styles/App.css';

// Importing all components to be used within this file.
import LoadingSpinner from './LoadingSpinner';
import Home from '../Home/Home';
import Games from '../Games/Games';
import SingleGame from '../SingleGame/SingleGame';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numGames: 0,
    }
  }

  componentDidMount() {
    // This request specifically fetches the number of games within the API DB.
    axios.get(`https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/count`, {
      headers: {
        "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
        Accept: "application/json"
      }
    })
    .then(response => {
      this.setState({ numGames: response.data.count });
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  render() {
    /*
      The following below involves storing a large amount of routes. The routes
      all point to the various game pages there are, i.e. the relative URLs.

      The logic of this is to loop through and store the pages in an array. The
      condition is set to that the incrementing counter is less than or equal to
      the number of pages required to display all games.

      This is done by using the Math.ceil function which will round up the integer
      and the value to be rounded up is the total number of games divided by 50,
      which happens to be the limit of max number of games within any one page.

      The result will then be used to map onto a new array, which will contain
      the routes to be used.

      As there are over 100000 games, the logic will take some time to execute
      fully. To compensate for this, the loading spinner will render instead while
      the logic executes in the background.

      Unfortunately, due to the limitations set by the API regarding free users,
      the further it will
    */
    let gamePages = [];
    let i = 1;
    while (i <= Math.ceil(this.state.numGames/10)) {
      gamePages.push(`/Games/${i}`);
      i++;
    }

    const pages = gamePages.map(gp =>
      <Route key={gp} exact path={gp} component={Games} />
    );

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {pages}
          <Route exact path='/Games/SingleGame' component={SingleGame} />
          <Route render={() => <LoadingSpinner /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
