import React from 'react';
import { DropdownItem, NavItem, NavLink, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import GamesRow from '../Games/GamesRow';
import SearchList from '../Games/SearchList';
import SingleMedia from '../SingleGame/SingleMedia';
import SingleRating from '../SingleGame/SingleRating';
import SingleRow from '../SingleGame/SingleRow';

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
                <Col lg={12}>
                  {array[i-1]}
                </Col>
              </Row>
            </TabPane>
  });
  return panes;
}

export const medias = (array, name) => {
  const mediaArray = array.map( m => {
    if (name === "Screenshots") {
      return <SingleMedia
                key={m.id}
                imgId={m.image_id} />
    } else {
      return <SingleMedia
                key={m.id}
                vidName={m.name}
                vidId={m.video_id} />
    }
  });
  return mediaArray;
}

export const ratingCates = (game, array1, array2) => {
  let valuesArray = [];
  game.aggregated_rating ? valuesArray.push(game.aggregated_rating) : valuesArray.push(0);
  game.rating ? valuesArray.push(game.rating) : valuesArray.push(0);
  game.total_rating ? valuesArray.push(game.total_rating) : valuesArray.push(0);

  const objRatings = array1.map( (r, i) => {
    let newObj = {};
    i++;
    newObj.id = i;
    newObj.name = r;
    newObj.desc = array2[i-1];
    newObj.rating = valuesArray[i-1];
    return newObj;
  });
  return objRatings;
}

export const ratingDisplay = (array) => {
  const displayRatings = array.map( dr =>
    <SingleRating
      key={dr.id}
      name={dr.name}
      desc={dr.desc}
      rating={dr.rating} />
  );
  return displayRatings;
}

export const rowDetails = (game, array) => {
  let rowArray = [];

  game.involved_companies ? rowArray.push(game.involved_companies) : rowArray.push("Not available");
  game.franchise ? rowArray.push(game.franchise.name) : rowArray.push("Not available");
  game.game_engines ? rowArray.push(game.game_engines[0].name) : rowArray.push("Not available");
  game.genres ? rowArray.push(game.genres) : rowArray.push("Not available");
  game.platforms ? rowArray.push(game.platforms) : rowArray.push("Not available");
  game.release_dates ? rowArray.push(game.release_dates[0].human) : rowArray.push("Not available");

  const objFields = array.map( (f, i) => {
    let newObj = {};
    i++;
    newObj.id = i;
    newObj.name = f;
    newObj.desc = rowArray[i-1];
    return newObj;
  });
  return objFields;
}

export const rowList = (array) => {
  const detailsList = array.map( d =>
    <SingleRow
      key={d.id}
      name={d.name}
      desc={d.desc} />
  );
  return detailsList;
}
