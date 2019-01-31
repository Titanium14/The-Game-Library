import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';

import NavBar from '../Utils/NavBar';
import Buttons from './Buttons';
import GameTable from './GameTable';
import PageControl from './PageControl';

import '../styles/Games.css';

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platforms: [],
      genres: [],
      platId: 0,
      genreName: "",
      platFlag: false,
      genFlag: false
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms?fields=*&filter[id][eq]=(6,48,130,49)`, {
      headers: {
        "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
        Accept: "application/json"
      }
    })
    .then(response => {
      // console.log(response.data);
      this.setState({ platforms: response.data });
      return axios.get(`https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/genres?fields=*&limit=20`, {
        headers: {
          "user-key": "03a676e5e4c61a2251ce741eb0cb41b4",
          Accept: "application/json"
        }
      })
    })
    .then(response => {
      // console.log(response.data);
      this.setState({ genres: response.data });
    })
    .catch(e => {
      console.log("error", e);
    });
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
    console.log(e.target.innerHTML);
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

    const pageNum = parseInt(this.props.location.pathname.substr(7));
    let prevPages = [];
    let nextPages = [];
    let i = pageNum;
    let flag = false;

    /**/
    while (i <= (pageNum+4) ) {
      nextPages.push(<PageControl key={i} pages={i} />);
      if (!flag) {
        let ii = pageNum;
        while (ii >= (pageNum-3) && ii > 1) {
          ii--;
          prevPages.unshift(<PageControl key={ii} pages={ii} />);
        }
        flag = true;
      }
      i++;
    }

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
              <GameTable
                offset={pageNum-1} />
            </Row>
            <Row noGutters>
              <Col md={1}></Col>
              <Col md={10}>
                <Pagination aria-label="Page navigation example">
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  {prevPages}
                  {nextPages}
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                </Pagination>
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
