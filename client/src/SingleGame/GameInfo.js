import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { displayImage } from '../Utils/VariableAssignment';

const GameInfo = (props) => {
  return (
    <>
      <Row className="s-row-positioning" noGutters>
        <Col className="text-center" lg={4}>
          <img className="border border-dark rounded" src={displayImage(props.cover, "cover_big", 264, 374, 24)} alt="..." />
        </Col>
        <Col className="s-spacing-all" lg={7}>
          <h1 className="text-white bg-dark">{props.name}</h1>
          <p><a className="text-light bg-dark" href={props.url}>{props.url}</a></p>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

GameInfo.propTypes = {
  cover: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GameInfo;
