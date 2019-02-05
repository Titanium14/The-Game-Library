import React, { Component } from 'react';
import { Row, Col, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../styles/Games.css';

import FilterButtons from './FilterButtons';
import GameTable from './GameTable';
import PageControl from './PageControl';
import ProgressBar from './ProgressBar';

const pcId = '6';
const ps4Id = '48';
const xBox1Id = '130';
const switchId = '49';
const arrayFilters = ["Platforms", "Genres"];

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
      holderId: 0,

      timeFlag: true,
      sortFlag: true,

      filterName: "",

      paginationIndex: 1,

      progressWidth: 0,
      addProgress: 50,
      timer: 1500,

      sortMode: "asc"
    }
  }

  componentDidMount() {
    axios.get(`${this.props.cors}${this.props.api}platforms?fields=*&filter[id][eq]=(${this.state.filtPlat})&order=name:${this.state.sortMode}`, {
      headers: {
        "user-key": this.props.userKey,
        Accept: "application/json"
      }
    })
    .then(response => {
      this.setState({ platforms: response.data });

      return axios.get(`${this.props.cors}${this.props.api}genres?fields=*&limit=20&order=name:${this.state.sortMode}`, {
        headers: {
          "user-key": this.props.userKey,
          Accept: "application/json"
        }
      })
    })
    .then(response => {
      this.setState({ genres: response.data });

      return axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[platforms][eq]=(${this.state.filtPlat})&limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:${this.state.sortMode}`, {
        headers: {
          "user-key": this.props.userKey,
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
    this.setState({ filterName: e.target.getAttribute('name') });
  }

  onDropDownOptionClick(e) {
    if (this.state.filterName === 'Remove Filters' && (this.state.platId || this.state.genreId)) {
      const btnName = e.target.innerHTML;
      this.setState({ holderId: 0 }, () => {
        let platformOptions, genreOptions, platIndex, genreIndex;

        if (!platIndex) {
          platIndex = this.state.platId;
        }
        if (!genreIndex) {
          genreIndex = this.state.genreId;
        }

        if (btnName === "Platforms") {
          platIndex = this.state.holderId;
          this.setState({ platId: platIndex });
        } else if (btnName === "Genres") {
          genreIndex = this.state.holderId;
          this.setState({ genreId: genreIndex });
        }

        platIndex !== 0 ? platformOptions = platIndex : platformOptions = this.state.filtPlat;
        genreIndex !== 0 ? genreOptions = `&filter[genres][eq]=${genreIndex}&` : genreOptions = "&";

        axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[platforms][eq]=(${platformOptions})${genreOptions}limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:${this.state.sortMode}`, {
          headers: {
            "user-key": this.props.userKey,
            Accept: "application/json"
          }
        })
        .then(response => this.setState({ games: response.data }))
        .catch(e => console.log("error", e));
      });
    } else {
      this.setState({ holderId: e.target.getAttribute('id') }, () => {
        let platformOptions, genreOptions, platIndex, genreIndex;

        if (this.state.filterName === 'Platforms') {
          platIndex = this.state.holderId;
          this.setState({ platId: platIndex });
        } else if (this.state.filterName === 'Genres') {
          genreIndex = this.state.holderId;
          this.setState({ genreId: genreIndex });
        }

        if (!platIndex) {
          platIndex = this.state.platId;
        }
        if (!genreIndex) {
          genreIndex = this.state.genreId;
        }

        platIndex !== 0 ? platformOptions = platIndex : platformOptions = this.state.filtPlat;
        genreIndex !== 0 ? genreOptions = `&filter[genres][eq]=${genreIndex}&` : genreOptions = "&";

        axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[platforms][eq]=(${platformOptions})${genreOptions}limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:${this.state.sortMode}`, {
          headers: {
            "user-key": this.props.userKey,
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
      console.log(this.state.paginationIndex);
      let platformOptions, genreOptions;

      this.state.platId !== 0 ? platformOptions = this.state.platId : platformOptions = this.state.filtPlat;
      this.state.genreId !== 0 ? genreOptions = `&filter[genres][eq]=${this.state.genreId}&` : genreOptions = "&";

      axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[platforms][eq]=(${platformOptions})${genreOptions}limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:${this.state.sortMode}`, {
        headers: {
          "user-key": this.props.userKey,
          Accept: "application/json"
        }
      })
      .then(response => this.setState({ games: response.data }))
      .catch(e => console.log("error", e));

    });
  }

  onSortBtnClick() {
    this.setState(prevState => ({
      sortFlag: !prevState.sortFlag
    }), () => {
      let platformOptions, genreOptions, sortOption;

      this.state.sortFlag ? sortOption = "asc" : sortOption = "desc";
      this.setState({ sortMode: sortOption });

      this.state.platId !== 0 ? platformOptions = this.state.platId : platformOptions = this.state.filtPlat;
      this.state.genreId !== 0 ? genreOptions = `&filter[genres][eq]=${this.state.genreId}&` : genreOptions = "&";

      axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[platforms][eq]=(${platformOptions})${genreOptions}limit=10&offset=${(this.state.paginationIndex-1)*10}&order=slug:${sortOption}`, {
        headers: {
          "user-key": this.props.userKey,
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

    const objFilters = arrayFilters.map( (g, i) => {
      let newObj = {};
      i++;
      newObj.id = i;
      newObj.name = g;
      return newObj;
    });

    return (
      <>
        {this.state.progressWidth >= 100 ? (
          <Row className="m-spacing">
            <Col></Col>
            <Col lg={6}>
              <Row noGutters>
                <GameTable
                  games={this.state.games}
                  handleSortBtnClick={this.onSortBtnClick.bind(this)} />
              </Row>
              <Row noGutters>
                <PageControl
                  paginationIndex={this.state.paginationIndex}
                  handlePageClick={this.onPageClick.bind(this)}
                  numGames={this.props.numGames} />
              </Row>
            </Col>
            <Col lg={2}>
              <h5>Filter options:</h5>
              <ButtonGroup vertical>
                <FilterButtons
                  color="primary"
                  name="Platforms"
                  objArray={objPlatforms}
                  handleDropClick={this.onDropDownOptionClick.bind(this)}
                  handleBtnClick={this.handleBtnClick.bind(this)} />
                <FilterButtons
                  color="secondary"
                  name="Genres"
                  objArray={objGenres}
                  handleDropClick={this.onDropDownOptionClick.bind(this)}
                  handleBtnClick={this.handleBtnClick.bind(this)} />
                <FilterButtons
                  color="danger"
                  name="Remove Filters"
                  objArray={objFilters}
                  handleDropClick={this.onDropDownOptionClick.bind(this)}
                  handleBtnClick={this.handleBtnClick.bind(this)} />
              </ButtonGroup>
            </Col>
            <Col></Col>
          </Row>
        ) : (
          <Row noGutters>
            <Col></Col>
            <Col lg={8}>
              <ProgressBar width={this.state.progressWidth} />
            </Col>
            <Col></Col>
          </Row>
        )}
      </>
    );
  }
}

Games.propTypes = {
  cors: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  userKey: PropTypes.string.isRequired,
  numGames: PropTypes.number.isRequired
}

export default Games;
