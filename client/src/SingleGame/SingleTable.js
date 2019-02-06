import React, { Component } from 'react';
import { Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

import SingleRow from './SingleRow';

const fieldsArray = ["Company", "Franchise", "Game Engine", "Genres", "Platforms", "Release Date", "URL"];

class SingleTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    const detail = this.props.game;
    let descArray = [];

    detail.involved_companies ? descArray.push(detail.involved_companies) : descArray.push("Not available");
    detail.franchise ? descArray.push(detail.franchise.name) : descArray.push("Not available");
    detail.game_engines ? descArray.push(detail.game_engines[0].name) : descArray.push("Not available");
    detail.genres ? descArray.push(detail.genres) : descArray.push("Not available");
    detail.platforms ? descArray.push(detail.platforms) : descArray.push("Not available");
    detail.release_dates ? descArray.push(detail.release_dates[0].human) : descArray.push("Not available");
    detail.url ? descArray.push(detail.url) : descArray.push("Not available");

    const objFields = fieldsArray.map( (f, i) => {
      let newObj = {};
      i++;
      newObj.id = i;
      newObj.name = f;
      newObj.desc = descArray[i-1];
      return newObj;
    });

    this.setState({ list: objFields });

  }

  render() {
    let detailsList = [];
    if (this.state.list.length > 0) {
      detailsList = this.state.list.map( d =>
        <SingleRow
          key={d.id}
          name={d.name}
          desc={d.desc} />
      );
    }
    return (
      <Col lg={12}>
        <Table responsive bordered striped hover>
          <thead>
            <tr className="s-table-header-control">
              <th className="s-column-size">Fields</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {detailsList}
          </tbody>
        </Table>
      </Col>
    );
  }
}

SingleTable.propTypes = {
  game: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default SingleTable;
