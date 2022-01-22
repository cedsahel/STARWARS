import React from 'react';
import "./card.css"
function Card(props) {
  return <div className='card'>
      <h3>{props.name}</h3>
      <button>plus d'infos</button>
  </div>;
}

export default Card;
