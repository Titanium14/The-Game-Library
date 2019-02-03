import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import IndividualPage from './IndividualPage';

class PageControl extends Component {
  constructor(props) {
    super(props);

    this.state = { numGames: 0 };
  }

  componentDidMount() {
    // This request specifically fetches the number of games within the API DB.
    axios.get(`https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/count`, {
      headers: {
        "user-key": "65b707308d679ec1b8d3bb331e5239ae",
        Accept: "application/json"
      }
    })
    .then(response => this.setState({ numGames: response.data.count }))
    .catch(e => console.log("error", e));
  }

  render() {
    /*
      The following below involves storing pages for pagination.

      The logic of this is to loop through and store the pages in an array.

      Unfortunately, due to the limitations set by the API regarding free users,
      only 150 games can be displayed at any one time.
    */
    const pageNum = this.props.paginationIndex;
    let prevPages = [];
    let nextPages = [];
    let i = pageNum;
    let flag = false;

    /**/
    while (i <= (pageNum+4) && i < (Math.ceil(this.state.numGames/10))) {
      nextPages.push(<IndividualPage
                        key={i}
                        pages={i}
                        handlePageClick={this.props.handlePageClick} />);
      if (!flag) {
        let ii = pageNum;
        while (ii >= (pageNum-3) && ii > 1) {
          ii--;
          prevPages.unshift(<IndividualPage
                              key={ii}
                              pages={ii}
                              handlePageClick={this.props.handlePageClick} />);
        }
        flag = true;
      }
      i++;
    }

    return (
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
    );
  }
}

PageControl.propTypes = {
  paginationIndex: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired
}

export default PageControl;
