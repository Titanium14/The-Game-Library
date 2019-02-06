import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertMsg = (props) => {
  return (
    <Alert color="info">
      <h2 className="alert-heading">Well, this is embarrassing...</h2>
      <p>
        {props.type === "Game" ? (
          `It looks like the ${props.type.toLowerCase()} doesn't exist on our database. This is most likely because the ${props.type.toLowerCase()} was recently deleted from the database.`
        ) : (
          `There are no ${props.type.toLowerCase()} to display here.`
        )}
      </p>
      <hr />
      <p className="mb-0">
        {props.type === "Game" ? (
          `Please click on the random ${props.type.toLowerCase()} option again to let the system choose another ${props.type.toLowerCase()}.`
        ) : (
          `There isn't much we can do if there are no ${props.type.toLowerCase()}. If you wish to view any ${props.type.toLowerCase()}, you will have to look elsewhere.`
        )}
      </p>
    </Alert>
  );
};

AlertMsg.propTypes = {
  type: PropTypes.string.isRequired
}

export default AlertMsg;
