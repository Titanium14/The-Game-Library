import React from 'react';
import PropTypes from 'prop-types';

import { rowInfo } from '../Utils/VariableAssignment';

const SingleRow = (props) => {
  return (
    <tr className="s-table-row-control">
      <td className="s-column-size">{props.name}</td>
      {!(Array.isArray(props.desc)) ? (
        <td>{props.desc}</td>
      ) : (
        <td>{rowInfo(props.name, props.desc)}</td>
      )}
    </tr>
  );
}

SingleRow.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]).isRequired
}

export default SingleRow;
