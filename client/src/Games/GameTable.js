import React, { Component } from 'react';

import { Table } from 'reactstrap';
import axios from 'axios';

import GameRow from './GameRow';

class GameTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      offset: 10,
      link: `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games?fields=*,cover.url,platforms.name,release_dates.human,genres.name&filter[platforms][eq]=(6,48,130,49)&limit=10&offset=0`
    }
  }

  componentDidMount() {
    axios.get(this.state.link, {
      headers: {
        "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
        Accept: "application/json"
      }
    })
    .then(response => {
      console.log(response.data);
      this.setState({ games: response.data });
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  render() {
    let imgSrc, platforms, platformArray, genres, genreArray, release;
    const gameList = this.state.games.map( g => {
      genreArray = [];
      platformArray = [];

      g.cover !== undefined ? imgSrc = g.cover.url : imgSrc = "https://placeholdit.imgix.net/~text?txtsize=8&txt=N/A&w=40&h=40";
      g.platforms !== undefined ? platforms = g.platforms : platforms = "Not available";
      g.genres !== undefined ? genres = g.genres : genres = "Not available";
      g.release_dates !== undefined ? release = g.release_dates[0].human : release = "Not available";

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
            <th>Game</th>
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

export default GameTable;
