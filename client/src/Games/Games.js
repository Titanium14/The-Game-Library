import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import GameCard from '../GameCard/GameCard';

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    // axios.get("https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/1942?fields=name,cover.url", {
    axios.get("https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games?fields=*,cover.url&filter[cover.url][exists]&filter[first_release_date][gt]=1262304918", {
      headers: {
        "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
        Accept: "application/json"
      }
    })
    .then(response => {
      console.log(response.data);
      this.setState({ games: response.data });
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  render() {
    const gameList = this.state.games.map( g => {
      return g.cover !== undefined ?
        <GameCard
          key={g.id}
          name={g.name}
          cover={g.cover.url}
          summary={g.summary} />
          :
      <GameCard
        key={g.id}
        name={g.name}
        summary={g.summary} />
    })
    return (
      <Container fluid className="m-grid-container">
        <Row>
          <Col md="12">
            <NavBar />
          </Col>
        </Row>
        <Row>
          {gameList}
        </Row>
      </Container>
    );
  }
}

export default Games;
