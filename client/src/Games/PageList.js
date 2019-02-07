import React from 'react';
import PropTypes from 'prop-types';

const PageList = (props) => {
  return (
    <li>
      {props.listOp}
    </li>
  );
}

PageList.propTypes = {
  listOp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired
}

export default PageList;
