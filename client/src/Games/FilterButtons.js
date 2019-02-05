import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

class FilterButtons extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    const dropList = this.props.objArray.map( dl =>
      <DropdownItem
          key={dl.id}
          id={dl.id}
          onClick={this.props.handleDropClick}>
        {dl.name}
      </DropdownItem>
    );
    return (
      <ButtonDropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle name={this.props.name} onClick={this.props.handleBtnClick} caret color={this.props.color}>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          {dropList}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

FilterButtons.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  objArray: PropTypes.array.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
  handleDropClick: PropTypes.func.isRequired
}

export default FilterButtons;
