import React from 'react';

import PageList from '../Games/PageList';
import PageIndividual from '../Games/PageIndividual';

export const displayImage = (imgSrc, size, w, h, textSize) => {
  let image;
  imgSrc ? image = `//images.igdb.com/igdb/image/upload/t_${size}/${imgSrc}.jpg` : image = `https://placeholdit.imgix.net/~text?txtsize=${textSize}&txt=N/A&w=${w}&h=${h}`;
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

export const video = (videoId) => {
  return `https://www.youtube.com/embed/${videoId}`;
}

export const rowInfo = (name, desc) => {
  let propAppend = "";

  if (Array.isArray(desc)) {
    let arrayList = desc;

    for (let i = 0; i < arrayList.length; i++) {
      let concatString;

      name === "Company" ?
        concatString = `${arrayList[i].company.name}`
          :
        concatString = `${arrayList[i].name}`;

      i < arrayList.length-1 ?
        propAppend = propAppend.concat(`${concatString}, `)
          :
        propAppend = propAppend.concat(concatString);
    }
  }
  return propAppend;
}
