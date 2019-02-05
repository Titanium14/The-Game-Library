import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

class GameInfoCard extends Component {
  render() {
    let propsUrl, newUrl;
    if (this.props.cover !== undefined) {
      propsUrl = this.props.cover;
      if (this.props.cover.indexOf("thumb") !== -1) {
        newUrl = propsUrl.replace("thumb", "720p");
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
}

GameInfoCard.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default GameInfoCard;
