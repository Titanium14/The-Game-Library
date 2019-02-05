import React, { Component } from 'react';
// This will import all parts needed for the Router to allow for navigation.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Importing the custom styles in.
import '../styles/App.css';

// Importing all components to be used within this file.
import Home from '../Home/Home';
import Games from '../Games/Games';
import SearchGame from '../Games/SearchGame';
import SingleGame from '../SingleGame/SingleGame';
import LoadingSpinner from '../Utils/LoadingSpinner';
import NavBar from '../Utils/NavBar';

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

    return (
      <>
        <NavBar numGames={this.state.numGames} />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Games' render={(obj) => (
              <Games
                cors={corsLink}
                api={apiLink}
                userKey={userKey}
                numGames={this.state.numGames}
                location={obj.location} />
            )} />
            <Route exact path='/Games/SingleGame' render={(obj) => (
              <SingleGame
                cors={corsLink}
                api={apiLink}
                userKey={userKey}
                location={obj.location} />
            )} />
            <Route exact path='/Games/SearchGame' render={(obj) => (
              <SearchGame
                cors={corsLink}
                api={apiLink}
                userKey={userKey}
                location={obj.location} />
            )} />
            <Route render={() => <LoadingSpinner /> } />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
