import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import '../styles/SingleGame.css';

import NavBar from '../Utils/NavBar';
import SideNav from './SideNav';
import GameInfoCard from './GameInfoCard';

class SingleGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: '*,cover.*,dlcs.*,franchise.*,game_engines.*,genres.*,involved_companies.*,platforms.*,release_dates.*,screenshots.*'
    }
  }

  componentDidMount() {
    // axios.get(`${this.props.corsLink}${this.props.apiLink}games?fields=${this.state.fields}&filter[id][eq]=${this.props.location.substr(18)}`, {
    //   headers: {
    //     "user-key": this.props.userKey,
    //     Accept: "application/json"
    //   }
    // })
    // .then(response => this.setState({ games: response.data }))
    // .catch(e => console.log("error", e));
  }

  render() {
    return (
      <Container fluid className="m-grid-container">
        <Row noGutters>
          <Col md="12">
            <NavBar />
          </Col>
        </Row>
        <Row className="m-spacing">
          <Col md="4"></Col>
          <Col md="4">
            <GameInfoCard />
          </Col>
          <Col md="4"></Col>
        </Row>
        <Row className="m-spacing">
          <Col md="2"></Col>
          <Col md="8">
            <SideNav />
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    );
  }
}

export default SingleGame;
