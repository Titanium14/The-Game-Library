import React from 'react';
import { DropdownItem, NavItem, NavLink, TabPane, Row } from 'reactstrap';
import classnames from 'classnames';

import GamesRow from '../Games/GamesRow';
import SearchList from '../Games/SearchList';

let createdObjects = [];
export const objOptions = (array) => {
  createdObjects = array.map( o => {
    let newObj = [];
    newObj.id = o.id;
    newObj.name = o.name;
    return newObj;
  });
  return createdObjects;
}

export const objCustomOptions = (customArray) => {
  createdObjects = customArray.map( (r, i) => {
    let newObj = [];
    i++;
    newObj.id = i;
    newObj.name = r;
    return newObj;
  });
  return createdObjects;
}

export const gameObjs = (games) => {
  let imgSrc, platforms, genres, release;
  const gameList = games.map( g => {
    let genreArray = [];
    let platformArray = [];

    g.cover ? imgSrc = g.cover.image_id : imgSrc = null;
    g.platforms ? platforms = g.platforms : platforms = "Not available";
    g.genres ? genres = g.genres : genres = "Not available";
    g.release_dates ? release = g.release_dates[0].human : release = "Not available";

    if (genres !== "Not available" && (genres && genres.length >= 1)) {
      let i = 0;
      while (i < genres.length) {
        genreArray.push(genres[i].name);
        i++;
      }
      genres = genreArray;
    }

    if (platforms !== "Not available" && (platforms && platforms.length >= 1)) {
      let i = 0;
      while (i < platforms.length) {
        platformArray.push(platforms[i].name);
        i++;
      }
      platforms = platformArray;
    }

    return <GamesRow
              key={g.id}
              id={g.id}
              name={g.name}
              cover={imgSrc}
              platforms={platforms}
              genres={genres}
              release_dates={release} />
  });
  return gameList;
}

export const searchResults = (state) => {
  const listResults = state.map( c =>
    <SearchList
        key={c.id}
        id={c.id}
        name={c.name} />
  );
  return listResults;
}

export const dropItems = (state, handleEvent) => {
  const dropList = state.map( dl =>
    <DropdownItem
        key={dl.id}
        id={dl.id}
        onClick={handleEvent}>
      {dl.name}
    </DropdownItem>
  );
  return dropList;
}

export const tabItems = (array, tabNum, handleEvent) => {
  const tabs = array.map( t =>
    <NavItem key={t.id}>
      <NavLink
        key={t.id}
        onClick={() => { handleEvent(`${t.id}`); }}
        className={classnames({ active: tabNum === `${t.id}` })}
      >
        {t.name}
      </NavLink>
    </NavItem>
  );
  return tabs;
}

export const tabPanes = (array) => {
  const panes = array.map( (p, i) => {
    i++;
    return <TabPane
              tabId={`${i}`}
              key={`${i}`}>
              <Row noGutters>
                {array[i-1]}
              </Row>
            </TabPane>
  });
  return panes;
}
