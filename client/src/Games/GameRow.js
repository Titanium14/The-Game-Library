import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from './List';

class GameRow extends Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.id };
  }

  render() {
    let genrelist = [];
    if (this.props.genres !== "Not available") {
      for (let i = 0; i < this.props.genres.length; i++) {
        genrelist.push(<List key={i} listOp={this.props.genres[i]} />);
      }
    } else {
      genrelist.push(<List key={1} listOp={this.props.genres} />);
    }

    let platformlist = [];
    if (this.props.platforms !== "Not available") {
      for (let i = 0; i < this.props.platforms.length; i++) {
        platformlist.push(<List key={i} listOp={this.props.platforms[i]} />);
      }
    } else {
      platformlist.push(<List key={1} listOp={this.props.platforms} />);
    }

    let propsUrl, newUrl;
    if (this.props.cover !== undefined) {
      propsUrl = this.props.cover;
      if (this.props.cover.indexOf("thumb") !== -1) {
        newUrl = propsUrl.replace("thumb", "micro");
      } else {
        newUrl = propsUrl;
      }
    }

    return (
      <tr className="s-table-row-control">
        <td><img className="s-img-size" src={newUrl} alt="..." /></td>
        <td><a href={`/Games/SingleGame/${this.props.id}`}>{this.props.name}</a></td>
        <td>
          <ul className="s-list">
            {platformlist}
          </ul>
        </td>
        <td>
          <ul className="s-list">
            {genrelist}
          </ul>
        </td>
        <td>{this.props.release_dates}</td>
      </tr>
    );
  }
}

GameRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
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

export default GameRow;
