import React from 'react';
import PropTypes from 'prop-types';

import Summary from './Summary';
import SingleTable from './SingleTable';
import Ratings from './Ratings';
import Media from './Media';

import { tabPanes } from '../Utils/ObjectGenerator';

const SubTabs = (props) => {
  const tabsArray = [
    <Summary
      game={props.game} />,
    <SingleTable
      game={props.game} />,
    <Ratings
      game={props.game} />,
    <Media
      name="Screenshots"
      mediaType={props.game.screenshots} />,
    <Media
      name="Videos"
      mediaType={props.game.videos} />];
  return (
    <>
      {tabPanes(tabsArray)}
    </>
  );
}

SubTabs.propTypes = {
  game: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default SubTabs;
