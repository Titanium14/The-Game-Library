import React, { Component } from 'react';
// This will import all parts needed for the Router to allow for navigation.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Importing the custom styles in.
import '../styles/App.css';

// Importing all components to be used within this file.
import LoadingSpinner from './LoadingSpinner';
import Home from '../Home/Home';
import Games from '../Games/Games';
import SingleGame from '../SingleGame/SingleGame';

const corsLink = "https://cors-anywhere.herokuapp.com/";
const apiLink = "https://api-v3.igdb.com/";
const userKey = "dcc5fb7ee6584a770c1966fb130e7c58";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { numGames: 0 };
  }

  componentDidMount() {
    // This request specifically fetches the number of games within the API DB.
    axios.get(`${corsLink}${apiLink}games/count`, {
      headers: {
        "user-key": userKey,
        Accept: "application/json"
      }
    })
    .then(response => this.setState({ numGames: response.data.count }))
    .catch(e => console.log("error", e));
  }

  render() {

    let gamePages = [];
    let i = 1;
    while (i <= this.state.numGames) {
      gamePages.push(`/Games/SingleGame/${i}`);
      i++;
    }

    const pages = gamePages.map(gp =>
      <Route key={gp} exact path={gp} render={(obj) => (
        <SingleGame
          cors={corsLink}
          api={apiLink}
          userKey={userKey}
          location={obj.location.pathname} />
      )} />
    );

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Games' render={() => (
            <Games
              numGames={this.state.numGames}
              cors={corsLink}
              api={apiLink}
              userKey={userKey} />
          )} />
          {pages}
          <Route render={() => <LoadingSpinner /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
