import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../styles/Home.css';

import NavBar from '../Utils/NavBar';
import Welcome from './Welcome';

const Home = (props) => {
  return (
    <Container fluid className="m-grid-container">
      <Row>
        <Col md="12">
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Welcome />
        <Col md={1}></Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Button href="/Games" color="primary" size="lg" block>Begin the search!</Button>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default Home;
