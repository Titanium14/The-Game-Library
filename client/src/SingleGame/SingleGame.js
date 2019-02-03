import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import NavBar from '../Utils/NavBar';

class SingleGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: '*,cover.*,platforms.*,release_dates.*,genres.*'
    }
  }

  componentDidMount() {
    axios.get(`${this.props.corsLink}${this.props.apiLink}games?fields=${this.state.fields}&filter[id][eq]=${this.state.id}`, {
      headers: {
        "user-key": this.props.userKey,
        Accept: "application/json"
      }
    })
    .then(response => this.setState({ games: response.data }))
    .catch(e => console.log("error", e));
  }

  render() {
    return (
      <Container fluid className="m-grid-container">
        <Row>
          <Col md="12">
            <NavBar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleGame;
