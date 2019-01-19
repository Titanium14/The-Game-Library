import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import NavBar from '../Utils/NavBar';

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
