import React from 'react';

import PageList from '../Games/PageList';
import PageIndividual from '../Games/PageIndividual';

export const displayImage = (imgSrc, size) => {
  let image;
  imgSrc ? image = `//images.igdb.com/igdb/image/upload/t_${size}/${imgSrc}.jpg` : image = "https://placeholdit.imgix.net/~text?txtsize=8&txt=N/A&w=40&h=40";
  return image;
}

export const arrayPages = (array) => {
  let pageList = [];
  if (array !== "Not available") {
    for (let i = 0; i < array.length; i++) {
      pageList.push(<PageList key={i} listOp={array[i]} />);
    }
  } else {
    pageList.push(<PageList key={1} listOp={array} />);
  }
  return pageList;
}

/*
  The following below involves storing pages for pagination.

  The logic of this is to loop through and store the pages in an array.

  Unfortunately, due to the limitations set by the API regarding free users,
  only 150 games can be displayed at any one time.
*/

export const arrayNextPages = (pageNum, numGames, handleEvent) => {
  let nextPages = [];
  let i = pageNum;
  while (i <= (pageNum+2) && i <= (Math.ceil(numGames/10))) {
    nextPages.push(<PageIndividual
                      key={i}
                      pages={i}
                      handlePageClick={handleEvent} />);
    i++;
  }
  return nextPages;
}

export const arrayPrevPages = (pageNum, numGames, handleEvent) => {
  let prevPages = [];
  let i = pageNum;
  while (i >= (pageNum-1) && i > 1) {
    i--;
    prevPages.unshift(<PageIndividual
                        key={i}
                        pages={i}
                        handlePageClick={handleEvent} />);
  }
  return prevPages;
}
