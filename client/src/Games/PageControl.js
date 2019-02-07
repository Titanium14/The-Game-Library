import React from 'react';
import { Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { arrayNextPages, arrayPrevPages } from '../Utils/VariableAssignment';

const PageControl = (props) => {
  const pageNum = props.paginationIndex;
  return (
    <>
      <Col lg={5} className="order-2 order-lg-1">
        <h6 className="s-subtitle">Showing {((pageNum*10)+1)-10} to {(pageNum*10)} of {Math.ceil(props.numGames/10)} games</h6>
      </Col>
      <Col lg={7} className="order-1 order-lg-2">
        <Pagination className="s-pagination" aria-label="Page navigation example">
            <PaginationItem disabled={pageNum > 1 ? false : true}>
              <PaginationLink className="s-remove-event" previous name={pageNum-1} onClick={props.handlePageClick} />
            </PaginationItem>
            {arrayPrevPages(pageNum, props.numGames, props.handlePageClick)}
            {arrayNextPages(pageNum, props.numGames, props.handlePageClick)}
            <PaginationItem disabled={pageNum < Math.ceil(props.numGames/10) ? false : true}>
              <PaginationLink className="s-remove-event" next name={pageNum+1} onClick={props.handlePageClick} />
            </PaginationItem>
        </Pagination>
      </Col>
    </>
  );
}

PageControl.propTypes = {
  paginationIndex: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  numGames: PropTypes.number.isRequired
}

export default PageControl;
