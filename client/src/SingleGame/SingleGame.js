import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../styles/SingleGame.css';

import SubNav from './SubNav';
import GameInfoCard from './GameInfoCard';
import LoadingSpinner from '../Utils/LoadingSpinner';

class SingleGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: [],
      fields: '*,cover.url,franchise.name,game_engines.name,genres.name,involved_companies.company.name,platforms.name,release_dates.human,screenshots.url,videos.*'
    }
  }

  componentDidMount() {
    axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[id][eq]=${this.props.location.hash.substr(1)}`, {
      headers: {
        "user-key": this.props.userKey,
        Accept: "application/json"
      }
    })
    .then(response => this.setState({ game: response.data }))
    .catch(e => console.log("error", e));
  }

  render() {
    let gameCover, summary;
    if (this.state.game.length > 0) {
      this.state.game[0].cover ? gameCover = this.state.game[0].cover.url : gameCover = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=284&h=160";
      this.state.game[0].summary ?
        summary = this.state.game[0].summary
          :
        this.state.game[0].storyline ?
          summary = this.state.game[0].storyline
            :
          summary = "No summary available";
    }

    return (
      <Container fluid className="m-grid-container">
        {this.state.game.length !== 0 ? (
          <>
            <Row className="m-spacing">
              <Col md="4"></Col>
              <Col md="4">
              <GameInfoCard
                name={this.state.game[0].name}
                cover={gameCover}
                summary={summary} />
              </Col>
              <Col md="4"></Col>
            </Row>
            <Row className="m-spacing">
              <Col md="2"></Col>
              <Col md="8">
                <SubNav game={this.state.game[0]} />
              </Col>
              <Col md="2"></Col>
            </Row>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Container>
    );
  }
}

SingleGame.propTypes = {
  cors: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  userKey: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}

export default SingleGame;
