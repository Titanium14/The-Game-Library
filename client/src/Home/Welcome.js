import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Welcome = (props) => {
  return (
    <Jumbotron className="m-spacing" fluid>
      <Container fluid>
        <h1 className="display-3 text-center">Welcome to The Game Library</h1>
        <p className="lead text-center">Here, you can search for games easily! Search for games with our filter system!</p>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
