import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import PropTypes from 'prop-types';
import axios from 'axios';

import GameInfoCard from '../Utils/GameInfoCard';

class SearchGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: [],
      fields: '*,cover.url,platforms.name,release_dates.human,genres.name',
      searchOp: `${this.props.location.search.substr(8)}`,
      searchFlag: false
    }
  }

  componentDidMount() {
    axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&search=${this.state.searchOp}`, {
      headers: {
        "user-key": this.props.userKey,
        Accept: "application/json"
      }
    })
    .then(response => this.setState({ searched: response.data }))
    .catch(e => console.log("error", e));
  }

  render() {
    const cardDetails = this.state.searched.map( c => {
      let gameCover, summary;
      c.cover ? gameCover = c.cover.url : gameCover = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=284&h=160";
      c.summary ?
        summary = c.summary
          :
        c.storyline ?
          summary = c.storyline
            :
          summary = "No summary available";

      return <GameInfoCard
                key={c.id}
                name={c.name}
                cover={gameCover}
                summary={summary} />
    });
    return (
      <Row>
        <Col></Col>
        <Col lg={4}>
          {cardDetails}
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default SearchGame;
