import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';
import axios from 'axios';

import '../styles/Games.css';

import NavBar from '../Utils/NavBar';
import Buttons from './Buttons';
import GameTable from './GameTable';
import PageControl from './PageControl';
import ProgressBar from './ProgressBar';

const corsLink = "https://cors-anywhere.herokuapp.com/";
const apiLink = "https://api-v3.igdb.com/";
const pcId = '6';
const ps4Id = '48';
const xBox1Id = '130';
const switchId = '49';

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      platforms: [],
      genres: [],

      fields: '*,cover.url,platforms.name,release_dates.human,genres.name',
      filtPlat: `${pcId},${ps4Id},${xBox1Id},${switchId}`,

      platId: 0,
      genreId: 0,

      timeFlag: true,
      platFlag: false,
      genFlag: false,

      paginationIndex: 1,

      progressWidth: 0,
      addProgress: 50,
      timer: 1500
    }
  }

  componentDidMount() {
    axios.get(`${corsLink}${apiLink}platforms?fields=*&filter[id][eq]=(${this.state.filtPlat})&order=name:asc`, {
      headers: {
        "user-key": "65b707308d679ec1b8d3bb331e5239ae",
        Accept: "application/json"
      }
    })
    .then(response => {
      this.setState({ platforms: response.data });

      return axios.get(`${corsLink}${apiLink}genres?fields=*&limit=20&order=name:asc`, {
        headers: {
          "user-key": "65b707308d679ec1b8d3bb331e5239ae",
          Accept: "application/json"
        }
      })
    })
    .then(response => {
      this.setState({ genres: response.data });

      return axios.get(`${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.filtPlat})&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`, {
        headers: {
          "user-key": "65b707308d679ec1b8d3bb331e5239ae",
          Accept: "application/json"
        }
      })
    })
    .then(response => this.setState({ games: response.data }))
    .catch(e => console.log("error", e));
  }

  componentWillUpdate() {
    if (this.state.timeFlag) {
      if (this.state.progressWidth >= 100) {
        this.setState({ timeFlag: false });
      } else {
        setTimeout(() => {
          this.state.progressWidth === this.state.addProgress ?
            this.setState({ progressWidth: this.state.progressWidth + this.state.addProgress - 1 })
              :
            this.setState({ progressWidth: this.state.progressWidth + this.state.addProgress });
        }, this.state.timer);
      }
    }
  }

  handleBtnClick(e) {
    if (e.target.getAttribute('name') === "Platforms") {
      this.setState({
        platFlag: true,
        genFlag: false
      });
    } else if (e.target.getAttribute('name') === "Genres") {
      this.setState({
        platFlag: false,
        genFlag: true
      });
    }
  }

  onDropDownOptionClick(e) {

    if (this.state.platFlag && !this.state.genFlag) {
      this.setState({ platId: e.target.getAttribute('id') }, () => {

        let requestUrl;

        this.state.genreId !== 0 ?
          requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.platId})&filter[genres][eq]=${this.state.genreId}&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`
            :
          requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.platId})&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`;

        axios.get(requestUrl, {
          headers: {
            "user-key": "65b707308d679ec1b8d3bb331e5239ae",
            Accept: "application/json"
          }
        })
        .then(response => this.setState({ games: response.data }))
        .catch(e => console.log("error", e));
      });

    } else {

      this.setState({ genreId: e.target.getAttribute('id') }, () => {

        let requestUrl;

        this.state.platId !== 0 ?
          requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.platId})&filter[genres][eq]=${this.state.genreId}&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`
            :
          requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.filtPlat})&filter[genres][eq]=${this.state.genreId}&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`;

        axios.get(requestUrl, {
          headers: {
            "user-key": "65b707308d679ec1b8d3bb331e5239ae",
            Accept: "application/json"
          }
        })
        .then(response => this.setState({ games: response.data }))
        .catch(e => console.log("error", e));
      });

    }

  }

  onPageClick(e) {
    this.setState({
      paginationIndex: parseInt(e.target.getAttribute('name')),
      progressWidth: 0,
      timeFlag: true
    }, () => {

      let requestUrl;

      if (this.state.platId !== 0 && this.state.genreId !== 0) {

        requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.platId})&filter[genres][eq]=${this.state.genreId}&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`;

      } else if (this.state.platId !== 0 && this.state.genreId === 0) {

        requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.platId})&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`;

      } else if (this.state.platId === 0 && this.state.genreId !== 0) {

        requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.filtPlat})&filter[genres][eq]=${this.state.genreId}&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`;

      } else {

        requestUrl = `${corsLink}${apiLink}games?fields=${this.state.fields}&${this.state.filtPlat}limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:asc`;

      }

      axios.get(requestUrl, {
        headers: {
          "user-key": "65b707308d679ec1b8d3bb331e5239ae",
          Accept: "application/json"
        }
      })
      .then(response => this.setState({ games: response.data }))
      .catch(e => console.log("error", e));

    });
  }

  render() {
    const objPlatforms = this.state.platforms.map( p => {
      let newObj = {};
      newObj.id = p.id;
      newObj.name = p.name;
      return newObj;
    });

    const objGenres = this.state.genres.map( g => {
      let newObj = {};
      newObj.id = g.id;
      newObj.name = g.name;
      return newObj;
    });

    return (
      <Container fluid className="m-grid-container">
        <Row>
          <Col md={12}>
            <NavBar />
          </Col>
        </Row>
        <Row className="m-spacing">
          <Col md={2}></Col>
          <Col md={6}>
            <Row noGutters>
              {this.state.progressWidth >= 100 ? (
                <GameTable games={this.state.games} />
              ) : (
                <ProgressBar width={this.state.progressWidth} />
              )}
            </Row>
            <Row noGutters>
              <Col md={1}></Col>
              <Col md={10}>
                <PageControl
                  paginationIndex={this.state.paginationIndex}
                  handlePageClick={this.onPageClick.bind(this)} />
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
          <Col md={2}>
            <h5>Filter options:</h5>
            <ButtonGroup vertical>
              <Buttons
                color="primary"
                name="Platforms"
                objArray={objPlatforms}
                handleDropClick={this.onDropDownOptionClick.bind(this)}
                handleBtnClick={this.handleBtnClick.bind(this)} />
              <Buttons
                color="secondary"
                name="Genres"
                objArray={objGenres}
                handleDropClick={this.onDropDownOptionClick.bind(this)}
                handleBtnClick={this.handleBtnClick.bind(this)} />
            </ButtonGroup>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default Games;
