import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavBar from '../NavBar/NavBar';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container fluid className="m-grid-container">
        <Row>
          <Col md="12">
            <NavBar />
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  }
}

export default Home;
