import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Example = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=284&h=160" alt="Card image cap" />
      <CardBody>
        <CardTitle>GAME Title</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      </CardBody>
    </Card>
  );
};

export default Example;
