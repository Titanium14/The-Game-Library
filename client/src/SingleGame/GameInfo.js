import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class GameInfo extends Component {
  render() {
    let propsCover, insertCover;
    propsCover = this.props.cover;
    if (propsCover.indexOf("thumb") !== -1) {
      insertCover = propsCover.replace("thumb", "cover_big");
    } else {
      insertCover = propsCover;
    }

    return (
      <Row>
        <Col></Col>
        <Col lg={3}>
        <img src={insertCover} alt="..." />
        </Col>
        <Col lg={7}>
          <h1>{this.props.name}</h1>
          <p>{this.props.summary}</p>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

GameInfo.propTypes = {
  cover: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default GameInfo;
