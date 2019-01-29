import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import NavBar from '../Utils/NavBar';

/*
  Do an axios request that takes in the name of the particular game.

  Change this into a class.

  Do not forget to add the route for this page.
*/

const SingleGame = (props) => {
  return (
    <Container fluid className="m-grid-container">
      <Row>
        <Col md="12">
          <NavBar />
        </Col>
      </Row>
    </Container>
  );
}

export default SingleGame;
