import React from 'react';
import "./filmCard.css"

export default function FilmCard(props) {
  let url = "films/"+props.url.slice(28,-1)
  return <div style={{backgroundColor:"black",border:"solid",margin:"10px", width:"300px",display:"flex", flexDirection:"column", justifyContent:"space-around", textAlign:"center"}}>
      <h3 style={{color:"yellow"}}>{props.title}</h3>
      <p style={{color:"yellow"}}>{props.date}</p>
      <a className='btnf' href={url}>Plus d'info</a>
  </div>;
}
