import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';

class Home extends Component {
  componentDidMount() {
    axios.get("https://api-endpoint.igdb.com/games/1942?fields=*", {
      headers: {
        "user-key": "c3e620117cdf3872d5a6cca1c4535bcc",
        Accept: "application/json"
      }
    })
    .then(response => {
      // Do work here
      console.log(response.data);
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  render() {
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
}

export default Home;
