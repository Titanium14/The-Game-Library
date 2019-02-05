import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import IndividualPage from './IndividualPage';

class PageControl extends Component {
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
    while (i <= (pageNum+4) && i <= (Math.ceil(this.props.numGames/10))) {
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
        {pageNum > 1 ? (
          <PaginationItem>
            <PaginationLink previous name={pageNum-1} onClick={this.props.handlePageClick} />
          </PaginationItem>
        ) : (
          <PaginationItem disabled>
            <PaginationLink previous name={pageNum-1} onClick={this.props.handlePageClick} />
          </PaginationItem>
        )}
        {prevPages}
        {nextPages}
        {pageNum < Math.ceil(this.props.numGames/10) ? (
          <PaginationItem>
            <PaginationLink next name={pageNum+1} onClick={this.props.handlePageClick} />
          </PaginationItem>
        ) : (
          <PaginationItem disabled>
            <PaginationLink next name={pageNum+1} onClick={this.props.handlePageClick} />
          </PaginationItem>
        )}
      </Pagination>
    );
  }
}

PageControl.propTypes = {
  paginationIndex: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  numGames: PropTypes.number.isRequired
}

export default PageControl;
