import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleRow extends Component {
  render() {
    let propAppend = "";

    if (Array.isArray(this.props.desc)) {
      let arrayList = this.props.desc;

      for (let i = 0; i < arrayList.length; i++) {
        let concatString;

        this.props.name === "Company" ?
          concatString = `${arrayList[i].company.name}`
            :
          concatString = `${arrayList[i].name}`;

        i < arrayList.length-1 ?
          propAppend = propAppend.concat(`${concatString}, `)
            :
          propAppend = propAppend.concat(concatString);
      }
    }

    return (
      <tr className="s-table-row-control">
        <td className="s-column-size">{this.props.name}</td>
        {!(Array.isArray(this.props.desc)) ? (
          <td>{this.props.desc}</td>
        ) : (
          <td>{propAppend}</td>
        )}
      </tr>
    );
  }
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
