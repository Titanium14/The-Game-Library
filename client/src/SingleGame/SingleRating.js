import React from 'react';
import { Progress, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PropTypes from 'prop-types';

const SingleRating = (props) => {
  return (
    <ListGroupItem>
      <ListGroupItemHeading tag="h2">{props.name}</ListGroupItemHeading>
      <ListGroupItemText>
        {props.desc}
      </ListGroupItemText>
      <Progress value={props.rating.toFixed(2)}>{props.rating.toFixed(2)}</Progress>
    </ListGroupItem>
  );
};

SingleRating.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default SingleRating;
