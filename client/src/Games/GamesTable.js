import React from 'react';
import { Col, Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { gameObjs } from '../Utils/ObjectGenerator';

const GamesTable = (props) => {
  return (
    <Col lg={12}>
      <Table responsive bordered striped hover>
        <thead>
          <tr className="s-table-header-control">
            <th></th>
            <th><Button className="s-button" onClick={props.handleSortBtnClick} color="link">Game</Button></th>
            <th>Platform</th>
            <th>Genres</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {gameObjs(props.games)}
        </tbody>
      </Table>
    </Col>
  );
}

GamesTable.propTypes = {
  games: PropTypes.array.isRequired,
  handleSortBtnClick: PropTypes.func.isRequired
}

export default GamesTable;
