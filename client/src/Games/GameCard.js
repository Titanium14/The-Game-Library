import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody, CardImg, CardText } from 'reactstrap';
import '../styles/Games.css';

class GameCard extends Component {
  render() {
    let imgSize, newSize;
    if (this.props.cover !== undefined) {
      console.log("Hi: " + this.props.cover);
      if (this.props.cover.indexOf("thumb") !== -1) {
        imgSize = this.props.cover;
        newSize = imgSize.replace("thumb", "1080p");
      }
    }
    return (
      <Col md={3}>
        <Card style={{'marginBottom':'20px'}}>
          <CardHeader>
            {this.props.name}
          </CardHeader>
          <CardImg className="test" top src={newSize} alt="..." />
          <CardBody>
            <CardText>
              {this.props.summary}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default GameCard;
