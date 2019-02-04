import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleRow extends Component {

  render() {
    console.log(this.props);
    return (
      <tr className="s-table-row-control">
        <td>{this.props.name}</td>
        <td></td>
      </tr>
    );
  }
}

SingleRow.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number
  ]).isRequired
}

export default SingleRow;
