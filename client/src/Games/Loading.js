import React from 'react';
import { Alert, Progress } from 'reactstrap';

const Loading = (props) => {
  return (
    <div className="s-spacing-bottom">
      <Alert color="info">
        Now loading! Please wait!
      </Alert>
      <Progress animated color="info" value={props.width} />
    </div>
  );
};

export default Loading;
