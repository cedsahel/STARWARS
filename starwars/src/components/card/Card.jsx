import React from 'react';
import "./card.css"
function Card(props) {
  let url = "/characters/"+props.id
  return <div className='card'>
      <h3>{props.name}</h3>
      <ul>
        <li>Height : {props.height}</li>
        <li>Mass : {props.mass}</li>
        <li>Hair color : {props.hair}</li>
        <li>eye color : {props.eye}</li>
        <li>birth : {props.birth}</li>
        <li>Gender : {props.gender}</li>
      </ul>
      <a  href={url} className='btn'><p>plus d'info...</p></a>
  </div>
}

export default Card;
