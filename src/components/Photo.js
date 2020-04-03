import React from 'react';
// Adds link to image gallery thumbnail to open Flickr source file in new browser tab.
const Photo = props => (
  <li className="photo">
    <a href={`https://www.flickr.com/photo.gne?id=${props.pathId}`} target="_blank" rel="noopener noreferrer">
      <img src={props.url} alt=""/>
    </a>
  </li>
);

export default Photo;