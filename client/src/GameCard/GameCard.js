import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody, CardImg } from 'reactstrap';

class GameCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Col md={12}>
        <Card style={{'marginBottom':'20px'}}>
          <CardHeader>
            {this.props.name}
          </CardHeader>
          <CardImg top src={this.props.cover} alt="..." />
          <CardBody>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default GameCard;
