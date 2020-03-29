import React from 'react';

//Here we take all data from the API
const Photo = props => {
  const id = props.data.id;
  const secret = props.data.secret;
  const server = props.data.server;
  const farm = props.data.farm;

  return (
  //With template literals we pass the date to the src
  <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
  </li>

  );
}

export default Photo;