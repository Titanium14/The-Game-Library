import React from 'react';
import { Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

import { rowDetails, rowList } from '../Utils/ObjectGenerator';

const fieldsArray = ["Company", "Franchise", "Game Engine", "Genres", "Platforms", "Release Date", "URL"];

const SingleTable = (props) => {
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
          {rowList(rowDetails(props.game, fieldsArray))}
        </tbody>
      </Table>
    </Col>
  );
}

SingleTable.propTypes = {
  game: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default SingleTable;
