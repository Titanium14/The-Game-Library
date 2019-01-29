import React from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

const PageControl = (props) => {
  return (
    <PaginationItem>
      <PaginationLink href={`/Games/${props.pages}`}>
        {props.pages}
      </PaginationLink>
    </PaginationItem>
  );
}

PageControl.propTypes = {
  pages: PropTypes.number.isRequired
}

export default PageControl;
