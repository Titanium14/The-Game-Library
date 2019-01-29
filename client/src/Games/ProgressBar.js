import React from 'react';
import { Alert, Progress } from 'reactstrap';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  return (
    <div className="s-spacing-bottom">
      <Alert color="info">
        Now loading! Please wait!
      </Alert>
      <Progress animated color="info" value={props.width} />
    </div>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired
}

export default ProgressBar;
