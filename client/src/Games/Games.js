import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavBar from '../NavBar/NavBar';

class Games extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <NavBar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Games;
