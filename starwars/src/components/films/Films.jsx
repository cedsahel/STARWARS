import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';
import "./film.css"


export default function Films() {

  const [data,setData] = useState([])
  
  useEffect(()=>{
    fetch("https://swapi.dev/api/films")
      .then(res => {
        return res.json()
      })
      .then(async (resultat) => {
        setData(resultat.results)
      })
  },[])

  console.log(data[0]?.url)
  return <div className='films'>
    <div className='containerFilm'>
      {data?.map((film , key) => (
          <FilmCard url={film.url} key={key} title={film.title} date={film.release_date} />
        ))}
    </div>
  </div>;
}
