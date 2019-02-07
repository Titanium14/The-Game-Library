import React from 'react';
import { Col, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import { ratingCates, ratingDisplay } from '../Utils/ObjectGenerator';

const ratingsArray = ["Aggregated Rating", "Rating", "Total Rating"];
const textArray = ["Rating based on external critic scores", "Average IGDB user rating", "Average rating based on both IGDB user and external critic scores"];

const Ratings = (props) => {
  return (
    <Col lg={12}>
      <ListGroup>
        {ratingDisplay(ratingCates(props.game, ratingsArray, textArray))}
      </ListGroup>
    </Col>
  );
};

Ratings.propTypes = {
  game: PropTypes.object.isRequired
}

export default Ratings;
