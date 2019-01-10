import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import GameCard from '../GameCard/GameCard';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    axios.get("https://api-endpoint.igdb.com/games/?fields=*", {
      headers: {
        "user-key": "0c2d0e413f87f647cda03ee9eb59e8b1",
        Accept: "application/json"
      }
    })
    .then(res => {
      // Do work here
      console.log(res.data);
      this.setState({ games: res.data });
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  render() {
    const gameList = this.state.games.map( g =>
      <GameCard
        key={g.id}
        name={g.name}
        cover={g.cover.url} />
        // The URL error is occurring because one of the objects do not have an image.
    )
    console.log(gameList);
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

export default Home;
