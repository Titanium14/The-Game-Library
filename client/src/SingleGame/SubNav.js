import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SingleTable from './SingleTable';

class SubNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Game Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Ratings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Screenshots
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Videos
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row noGutters>
              <SingleTable
                game={this.props.game} />
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row noGutters>
              <Col lg="12">
                A
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row noGutters>
              <Col lg="12">
                A
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row noGutters>
              <Col lg="12">
                A
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </>
    );
  }
}

SubNav.propTypes = {
  game: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default SubNav;
