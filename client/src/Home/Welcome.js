import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Welcome = (props) => {
  return (
    <Jumbotron className="m-spacing" fluid>
      <Container fluid>
        <h1 className="display-3">Welcome to the Game Library</h1>
        <p className="lead">Here, you can search for games easily! Search for games with our filter system!</p>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
