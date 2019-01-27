import React, { Component } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';

class Wait extends Component {
  render() {
    return (
      <Container className="m-grid-container" fluid>
        <Row className="s-row-space" noGutters>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Spinner className="s-spinner" type="grow" color="primary" />
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default Wait;
