import React from 'react';

import { Container, Row, Col, ButtonGroup } from 'reactstrap';

import NavBar from '../Utils/NavBar';
import Buttons from './Buttons';
import GameTable from './GameTable';

import '../styles/Games.css';

const Games = (props) => {
  const platforms = ["PS4", "XBox", "PC", "Nintendo Switch"];
  const genres = ["Action", "Adventure", "Causal", "RPG", "Horror", "FPS", "Sports", "Racing"];

  const objPlatforms = platforms.map( (c, i) => {
    let newObj = {};
    i++;
    newObj.id = i;
    newObj.name = c;
    return newObj;
  });

  const objGenres = genres.map( (g, i) => {
    let newObj = {};
    i++;
    newObj.id = i;
    newObj.name = g;
    return newObj;
  });

  return (
    <Container fluid className="m-grid-container">
      <Row>
        <Col md={12}>
          <NavBar />
        </Col>
      </Row>
      <Row className="m-spacing">
        <Col md={2}></Col>
        <Col md={6}>
          <Row noGutters>
            <GameTable />
          </Row>
        </Col>
        <Col md={2}>
          <h5>Filter options:</h5>
          <ButtonGroup vertical>
            <Buttons
              color="primary"
              name="Platforms"
              platforms={objPlatforms} />
            <Buttons
              color="secondary"
              name="Genres"
              genre={objGenres} />
          </ButtonGroup>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default Games;
