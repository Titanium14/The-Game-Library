import React from 'react';

import { Container, Row, Col, ButtonGroup, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import NavBar from '../Utils/NavBar';
import Buttons from './Buttons';
import GameTable from './GameTable';
import PageControl from './PageControl';

import '../styles/Games.css';

const Games = (props) => {
  const searchPlatforms = ["PS4", "XBox", "PC", "Nintendo Switch"];
  const searchGenres = ["Action", "Adventure", "Causal", "RPG", "Horror", "FPS", "Sports", "Racing"];

  const objPlatforms = searchPlatforms.map( (c, i) => {
    let newObj = {};
    i++;
    newObj.id = i;
    newObj.name = c;
    return newObj;
  });

  const objGenres = searchGenres.map( (g, i) => {
    let newObj = {};
    i++;
    newObj.id = i;
    newObj.name = g;
    return newObj;
  });

  const pageNum = parseInt(props.location.pathname.substr(7));
  let prevPages = [];
  let nextPages = [];
  let i = pageNum;
  let flag = false;

  /**/
  while (i <= (pageNum+4) ) {
    nextPages.push(<PageControl key={i} pages={i} />);
    if (!flag) {
      let ii = pageNum;
      while (ii >= (pageNum-3) && ii > 1) {
        ii--;
        prevPages.unshift(<PageControl key={ii} pages={ii} />);
      }
      flag = true;
    }
    i++;
  }

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
            <GameTable
              offset={pageNum-1} />
          </Row>
          <Row noGutters>
            <Col md={1}></Col>
            <Col md={10}>
              <Pagination aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>
                {prevPages}
                {nextPages}
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
        <Col md={2}>
          <h5>Filter options:</h5>
          <ButtonGroup vertical>
            <Buttons
              color="primary"
              name="Platforms"
              objArray={objPlatforms} />
            <Buttons
              color="secondary"
              name="Genres"
              objArray={objGenres} />
          </ButtonGroup>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default Games;
