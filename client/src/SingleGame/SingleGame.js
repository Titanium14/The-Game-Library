import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../styles/SingleGame.css';

import SubNav from './SubNav';
import GameInfo from './GameInfo';
import AlertMsg from '../Utils/AlertMsg';
import LoadingSpinner from '../Utils/LoadingSpinner';

import { displayImage } from '../Utils/VariableAssignment';

class SingleGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: [],
      resFlag: false,
      existFlag: true,
      fields: '*,cover.*,franchise.name,game_engines.name,genres.name,involved_companies.company.name,platforms.name,release_dates.human,screenshots.*,videos.*'
    }
  }

  componentDidMount() {
    axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filter[id][eq]=${this.props.location.hash.substr(1)}`, {
      headers: {
        "user-key": this.props.userKey,
        Accept: "application/json"
      }
    })
    .then(response => {
      response.data.length !== 0 ? this.setState({
        resFlag: true,
        game: response.data[0]
      })
        :
      this.setState({
        existFlag: false,
        game: response.data
      });
    })
    .catch(e => console.log("error", e));
  }

  render() {
    let name, gameCover, summary, screenshot, divStyle;
    if (this.state.resFlag && this.state.game !== []) {
      name = this.state.game.name;
      this.state.game.cover ? gameCover = this.state.game.cover.image_id : gameCover = null;
      this.state.game.summary ?
        summary = this.state.game.summary
          :
        this.state.game.storyline ?
          summary = this.state.game.storyline
            :
          summary = "No summary available";
      this.state.game.screenshots ? screenshot = this.state.game.screenshots[0].image_id : screenshot = undefined;

      divStyle = {
        backgroundImage: 'url(' + displayImage(screenshot, "1080p_2x", 1920, 500, 36) + ')'
      };
    }

    return (
      <>
        {this.state.resFlag && this.state.game !== [] ? (
          <>
            <Row noGutters>
              <Col className="s-overlay" style={divStyle}></Col>
            </Row>
            <Row noGutters>
              <Col></Col>
              <Col lg={8}>
                <GameInfo
                  name={name}
                  cover={gameCover}
                  summary={summary} />
              </Col>
              <Col></Col>
            </Row>
            <Row className="m-spacing m-spacing-bottom" noGutters>
              <Col></Col>
              <Col lg={8}>
                <SubNav game={this.state.game} />
              </Col>
              <Col></Col>
            </Row>
          </>
        ) : this.state.existFlag ? (
          <LoadingSpinner />
        ) : (
          <Row className="m-spacing" noGutters>
            <Col></Col>
            <Col lg={6}>
              <AlertMsg
                type="Game" />
            </Col>
            <Col></Col>
          </Row>
        )}
      </>
    );
  }
}

SingleGame.propTypes = {
  cors: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  userKey: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
}

export default SingleGame;
