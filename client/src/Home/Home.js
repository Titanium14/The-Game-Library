import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import Welcome from './Welcome';

const Home = (props) => {
  return (
    <>
      <Row noGutters>
        <Col></Col>
        <Col md={10}>
          <Welcome />
        </Col>
        <Col></Col>
      </Row>
      <Row noGutters>
        <Col></Col>
        <Col md={10}>
          <Button href="/Games" color="primary" size="lg" block>Begin the search!</Button>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Home;
