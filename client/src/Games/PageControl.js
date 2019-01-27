import React, { Component } from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';

class PageControl extends Component {
  render() {
    return (
      <PaginationItem>
        <PaginationLink href={`/Games/${this.props.pages}`}>
          {this.props.pages}
        </PaginationLink>
      </PaginationItem>
    );
  }
}

export default PageControl;
