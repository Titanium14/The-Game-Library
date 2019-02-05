import React from 'react';
import { Alert } from 'reactstrap';

const AlertMsg = (props) => {
  return (
    <Alert color="info">
      <h2 className="alert-heading">Well, this is embarrassing...</h2>
      <p>
        It looks like the game doesn't exist on our database. This is most likely because the game was recently deleted from the database.
      </p>
      <hr />
      <p className="mb-0">
        Please click on the random game option again to let the system choose another game.
      </p>
    </Alert>
  );
};

export default AlertMsg;
