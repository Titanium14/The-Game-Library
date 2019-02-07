import PropTypes from 'prop-types';

import { objCustomOptions, tabItems } from '../Utils/ObjectGenerator';

const tabNames = ["Summary", "Game Details", "Ratings", "Screenshots", "Videos"];

const SubNavLink = (props) => {
  return (
    tabItems(objCustomOptions(tabNames), props.tab, props.toggle)
  );
}

SubNavLink.propTypes = {
  tab: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default SubNavLink;
