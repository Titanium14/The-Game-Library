import React, { Component } from 'react';

import { Table, Button } from 'reactstrap';
import axios from 'axios';

import GameRow from './GameRow';

const corsLink = "https://cors-anywhere.herokuapp.com/";
const apiLink = "https://api-v3.igdb.com/games?";
let fields = "*,cover.url,platforms.name,release_dates.human,genres.name";
let filters = "[platforms][eq]=(6,48,130,49)";
let limit = 10;
let offset = 0;

class GameTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      offset: 10,
      link: `${corsLink}${apiLink}fields=${fields}&filter${filters}&limit=${limit}&offset=${offset}`,
      nameFlag: false
    }

    this.handleClickGame = this.handleClickGame.bind(this);
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

  componentDidUpdate() {
    console.log("hi");
  }

  handleClickGame() {
    this.setState(prevState => ({
      nameFlag: !prevState.nameFlag
    }));
  }

  render() {
    console.log(this.state.nameFlag);
    let imgSrc, platforms, platformArray, genres, genreArray, release;

    const data = this.state.nameFlag === true ? [].concat(this.state.games)
    .sort((a,b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      return 0;
    })
      :
    [].concat(this.state.games)
      .sort((a,b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })

    const gameList = data.map( g => {
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
            <th><Button className="s-button" onClick={this.handleClickGame} color="link">Game</Button></th>
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
