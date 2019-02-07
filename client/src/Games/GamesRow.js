import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { displayImage, arrayPages } from '../Utils/VariableAssignment';

class GamesRow extends Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.id };
  }

  render() {
    return (
      <tr className="s-table-row-control">
        <td><img className="s-img-size" src={displayImage(this.props.cover, "micro", 40, 40, 8)} alt="..." /></td>
        <td><a href={`/Games/SingleGame#${this.props.id}`}>{this.props.name}</a></td>
        <td>
          <ul className="s-list">
            {arrayPages(this.props.platforms)}
          </ul>
        </td>
        <td>
          <ul className="s-list">
            {arrayPages(this.props.genres)}
          </ul>
        </td>
        <td>{this.props.release_dates}</td>
      </tr>
    );
  }
}

GamesRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string,
  platforms: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  release_dates: PropTypes.string.isRequired
}

export default GamesRow;
