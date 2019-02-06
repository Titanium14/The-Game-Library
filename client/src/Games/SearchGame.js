import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import SearchList from './SearchList';

class SearchGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: [],
      fields: '*,cover.url,platforms.name,release_dates.human,genres.name',
      searchOp: `${this.props.location.search.substr(8)}`,
      searchValue: `${this.props.location.hash.substr(1)}`,
      searchFlag: false
    }
  }

  componentDidMount() {
    axios.get(`${this.props.cors}${this.props.api}games?fields=${this.state.fields}&filters[version_parent][eq]=null&search=${this.state.searchOp}&limit=20`, {
      headers: {
        "user-key": this.props.userKey,
        Accept: "application/json"
      }
    })
    .then(response => this.setState({ searched: response.data }))
    .catch(e => console.log("error", e));
  }

  render() {
    const listDetails = this.state.searched.map( c =>
      <SearchList
          key={c.id}
          id={c.id}
          name={c.name} />
    );
    return (
      <Row>
        <Col></Col>
        <Col lg={4}>
          <Card>
            <CardHeader tag="h4">You searched for {decodeURI(this.state.searchValue.toUpperCase())}...</CardHeader>
            <ListGroup>
              {listDetails}
            </ListGroup>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

SearchGame.propTypes = {
  cors: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  userKey: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
}

export default SearchGame;
