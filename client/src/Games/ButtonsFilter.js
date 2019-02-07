import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

import { dropItems } from '../Utils/ObjectGenerator';

class ButtonsFilter extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    return (
      <ButtonDropdown direction={this.props.direction} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle name={this.props.name} onClick={this.props.handleBtnClick} caret color={this.props.color}>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu className={this.props.direction === "down" && this.props.name === "Genres" ? "s-limit-size" : ""}>
          {dropItems(this.props.objArray, this.props.handleDropClick)}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

ButtonsFilter.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  objArray: PropTypes.array.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
  handleDropClick: PropTypes.func.isRequired
}

export default ButtonsFilter;
