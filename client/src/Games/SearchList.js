import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchList = (props) => {
  return (
    <>
      <ListGroupItem tag="a" href={`/Games/SingleGame#${props.id}`} action>{props.name}</ListGroupItem>
    </>
  );
}

SearchList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default SearchList;
