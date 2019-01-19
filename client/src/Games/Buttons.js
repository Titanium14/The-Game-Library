import React, { Component } from 'react';

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
    let dropOption;
    if (this.props.platforms !== undefined) {
      dropOption = this.props.platforms;
    } else if (this.props.genre !== undefined) {
      dropOption = this.props.genre;
    }
    const dropList = dropOption.map( dOp =>
      <DropdownItem key={dOp.id} onClick={() => this.onDropDownOptionClick(dOp)}>
        {dOp.name}
      </DropdownItem>
    )
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

export default Buttons;
