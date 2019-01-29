import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this);
    this.onDropDownOptionClick = this.onDropDownOptionClick.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onDropDownOptionClick(dSelected) {
    this.setState({ dSelected });
  }

  render() {
    const dropList = this.props.objArray.map( dl =>
      <DropdownItem key={dl.id} onClick={() => this.onDropDownOptionClick(dl)}>
        {dl.name}
      </DropdownItem>
    );
    return (
      <ButtonDropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color={this.props.color}>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          {dropList}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

Buttons.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  objArray: PropTypes.array.isRequired
}

export default Buttons;
