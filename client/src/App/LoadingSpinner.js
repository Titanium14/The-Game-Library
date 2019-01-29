/*
  This file contains the spinner that will run if the website loads a page that
  does not exist. It will mainly be used when the website is loading in the routes
  to the various games pages (seen in App.js).
*/

import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';

const LoadingSpinner = (props) => {
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

export default LoadingSpinner;
