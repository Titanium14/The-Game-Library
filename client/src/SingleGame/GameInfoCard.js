import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class GameInfoCard extends Component {
  render() {
    let propsUrl, newUrl;
    if (this.props.cover !== undefined) {
      propsUrl = this.props.cover;
      if (this.props.cover.indexOf("thumb") !== -1) {
        newUrl = propsUrl.replace("thumb", "cover_big");
      } else {
        newUrl = propsUrl;
      }
    }

    return (
      <Card>
        <CardImg top width="100%" src={newUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>{this.props.summary}</CardText>
        </CardBody>
      </Card>
    );
  }
};

export default GameInfoCard;
