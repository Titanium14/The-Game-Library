import React from 'react';
import { Col, Alert, Progress } from 'reactstrap';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  return (
    <Col md={12} className="s-spacing-bottom">
      <Alert color="info">
        Now loading! Please wait!
      </Alert>
      <Progress animated color="info" value={props.width} />
    </Col>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired
}

export default ProgressBar;
