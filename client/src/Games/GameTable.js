import React, { Component } from 'react';

import { Col, Table, Button } from 'reactstrap';
import axios from 'axios';

import GameRow from './GameRow';
import Loading from './Loading';

const corsLink = "https://cors-anywhere.herokuapp.com/";
const apiLink = "https://api-v3.igdb.com/games?";
const limit = 50;

class GameTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      fields: '*,cover.url,platforms.name,release_dates.human,genres.name',
      filters: '[platforms][eq]=(6,48,130,49)',
      offset: this.props.offset*10,
      nameFlag: false,
      timeFlag: true,
      sortFlag: false,
      progressWidth: 0,
      addProgress: 50,
      timer: 1500,
      pageNum: this.props.pageNum
    }

    this.handleClickGame = this.handleClickGame.bind(this);
  }

  componentDidMount() {
    axios.get(`${corsLink}${apiLink}fields=${this.state.fields}&filter${this.state.filters}&limit=${limit}&offset=${this.state.offset}&order=slug:asc`, {
      headers: {
        "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
        Accept: "application/json"
      }
    })
    .then(response => {
      // console.log(response.data);
      this.setState({ games: response.data });
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  componentWillUpdate() {
    if (this.state.timeFlag) {
      if (this.state.progressWidth >= 100) {
        this.setState({
          timeFlag: false
        });
      } else {
        setTimeout(() => {
          if (this.state.progressWidth === this.state.addProgress) {
            this.setState({
              progressWidth: this.state.progressWidth + this.state.addProgress - 1
            });
          } else {
            this.setState({
              progressWidth: this.state.progressWidth + this.state.addProgress
            });
          }
        }, this.state.timer);
      }
    }
  }

  handleClickGame() {
    this.setState(prevState => ({
      nameFlag: !prevState.nameFlag
    }));
  }

  render() {
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

    // let limitNumGames = [];
    // if (this.state.pageNum === '1' && data.length > 0) {
    //   for (let i = 0; i < limit/100*20; i++) {
    //     limitNumGames.push(data[i]);
    //   }
    // } else if (this.state.pageNum !== '1' && data.length > 0) {
    //   for (let i = 0; i < limit/100*20; i++) {
    //     limitNumGames.push(data[i+(this.state.offset*(this.state.pageNum-1))]);
    //   }
    // }

    let gameList = [];
    if (data.length > 0) {
      gameList = data.map( g => {
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
    }

    return (
      <Col md={12}>
        {this.state.progressWidth >= 100 ? (
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
        ) : (
          // prints please wait when screen is loaded
          <Loading width={this.state.progressWidth} />
        )}
      </Col>
    );
  }
}

export default GameTable;
