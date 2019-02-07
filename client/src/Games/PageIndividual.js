import React from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

const PageIndividual = (props) => {
  return (
    <PaginationItem>
      <PaginationLink name={props.pages} onClick={props.handlePageClick}>
        {props.pages}
      </PaginationLink>
    </PaginationItem>
  );
}

PageIndividual.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired
}

export default PageIndividual;
