import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import GameRow from './GameRow';

class GameTable extends Component {
  render() {
    let imgSrc, platforms, platformArray, genres, genreArray, release;

    const gameList = this.props.games.map( g => {
      genreArray = [];
      platformArray = [];

      g.cover ? imgSrc = g.cover.url : imgSrc = "https://placeholdit.imgix.net/~text?txtsize=8&txt=N/A&w=40&h=40";
      g.platforms ? platforms = g.platforms : platforms = "Not available";
      g.genres ? genres = g.genres : genres = "Not available";
      g.release_dates ? release = g.release_dates[0].human : release = "Not available";

      if (genres !== "Not available" && (genres && genres.length >= 1)) {
        let i = 0;
        while (i < genres.length) {
          genreArray.push(genres[i].name);
          i++;
        }
        genres = genreArray;
      }

      if (platforms !== "Not available" && (platforms && platforms.length >= 1)) {
        let i = 0;
        while (i < platforms.length) {
          platformArray.push(platforms[i].name);
          i++;
        }
        platforms = platformArray;
      }

      return <GameRow
                key={g.id}
                id={g.id}
                name={g.name}
                cover={imgSrc}
                platforms={platforms}
                genres={genres}
                release_dates={release} />
    });

    return (
      <Table responsive bordered striped hover>
        <thead>
          <tr className="s-table-header-control">
            <th></th>
            <th><Button className="s-button" onClick={this.props.handleSortBtnClick} color="link">Game</Button></th>
            <th>Platform</th>
            <th>Genres</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {gameList}
        </tbody>
      </Table>
    );
  }
}

GameTable.propTypes = {
  games: PropTypes.array.isRequired,
  handleSortBtnClick: PropTypes.func.isRequired
}

export default GameTable;
