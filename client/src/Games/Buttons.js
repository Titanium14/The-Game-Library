import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color={this.props.color}>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => this.onDropDownOptionClick(this.props.console[0])}>
            {this.props.console[0]}
          </DropdownItem>
          <DropdownItem
            onClick={() => this.onDropDownOptionClick(this.props.console[1])}>
            {this.props.console[1]}
          </DropdownItem>
          <DropdownItem
            onClick={() => this.onDropDownOptionClick(this.props.console[2])}>
            {this.props.console[2]}
          </DropdownItem>
          <DropdownItem
            onClick={() => this.onDropDownOptionClick(this.props.console[3])}>
            {this.props.console[3]}
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Buttons;
