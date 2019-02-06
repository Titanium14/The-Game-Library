import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import SingleRating from './SingleRating';

const ratingsArray = ["Aggregated Rating", "Rating", "Total Rating"];
const textArray = ["Rating based on external critic scores", "Average IGDB user rating", "Average rating based on both IGDB user and external critic scores"];

class Ratings extends Component {
  render() {
    let propsGame = this.props.game;
    let valuesArray = [];
    propsGame.aggregated_rating ? valuesArray.push(propsGame.aggregated_rating) : valuesArray.push(0);
    propsGame.rating ? valuesArray.push(propsGame.rating) : valuesArray.push(0);
    propsGame.total_rating ? valuesArray.push(propsGame.total_rating) : valuesArray.push(0);

    const objRatings = ratingsArray.map( (r, i) => {
      let newObj = {};
      i++;
      newObj.id = i;
      newObj.name = r;
      newObj.desc = textArray[i-1];
      newObj.rating = valuesArray[i-1];
      return newObj;
    });

    const displayRatings = objRatings.map( dr =>
      <SingleRating
        key={dr.id}
        name={dr.name}
        desc={dr.desc}
        rating={dr.rating} />
    );

    return (
      <ListGroup>
        {displayRatings}
      </ListGroup>
    );
  }
};

Ratings.propTypes = {
  game: PropTypes.object.isRequired
}

export default Ratings;
