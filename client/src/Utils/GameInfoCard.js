import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

class GameInfoCard extends Component {
  render() {
    let propsCover, insertCover;
    propsCover = this.props.cover;
    if (propsCover.indexOf("thumb") !== -1) {
      insertCover = propsCover.replace("thumb", "720p");
    } else {
      insertCover = propsCover;
    }

    return (
      <Card>
        <CardImg top width="100%" src={insertCover} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>{this.props.summary}</CardText>
        </CardBody>
      </Card>
    );
  }
}

GameInfoCard.propTypes = {
  cover: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default GameInfoCard;
