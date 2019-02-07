import React, { Component } from 'react';
import { TabContent, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import SubNavLink from './SubNavLink';
import SubTabs from './SubTabs';

class SubNav extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTab: '1' };
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
          <SubNavLink
            tab={this.state.activeTab}
            toggle={this.toggle.bind(this)} />
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <SubTabs
            game={this.props.game} />
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
