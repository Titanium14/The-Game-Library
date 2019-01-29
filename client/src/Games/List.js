import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  return (
    <li>
      {props.listOp}
    </li>
  );
}

List.propTypes = {
  listOp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired
}

export default List;
