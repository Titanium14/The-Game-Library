import React, { Component } from 'react'

import List from './List';

class GameRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id
    }
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

    let imgSize, newSize;
    if (this.props.cover !== undefined) {
      imgSize = this.props.cover;
      if (this.props.cover.indexOf("thumb") !== -1) {
        newSize = imgSize.replace("thumb", "micro");
      } else {
        newSize = imgSize;
      }
    }

    return (
      <tr className="s-table-row-control">
        <td><img className="s-img-size" src={newSize} alt="..." /></td>
        <td><a href="/Games/SingleGame">{this.props.name}</a></td>
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

export default GameRow;
