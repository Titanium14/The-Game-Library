import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      randomNum: Math.floor((Math.random() * this.props.numGames) + 1)
    };

    this.handleRandomClick = this.handleRandomClick.bind(this);
  }

  handleRandomClick() {
    this.setState({ randomNum: Math.floor((Math.random() * this.props.numGames) + 1) }, () => {
      window.location.reload();
    });
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">The Game Library</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavLink href="/Games">Games</NavLink>
            <NavLink href={`/Games/SingleGame#${this.state.randomNum}`} onClick={this.handleRandomClick}>Random Game</NavLink>
          </Nav>
          <Form action="/Games/SearchGame" inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="search" name="search" id="search" placeholder="Search for a game..." aria-label="Search" />
            </FormGroup>
            <Button>Search</Button>
          </Form>
        </Collapse>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  numGames: PropTypes.number.isRequired
}

export default NavBar;
