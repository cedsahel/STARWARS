import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./fiche.css"

export default function Character() {
    const params = useParams()
    const id = params.id
    const [data,setData] = useState()
    const [vehicles,setVehicles] = useState()
    

    useEffect(() => {
      fetch("https://swapi.dev/api/people/"+id)
        .then( res => {
          return res.json()
        })
        .then( async (resultat) => {
          setData(resultat)
        })
    },[])

    return <div className='perso'>
    <div className='head'>
      <div className="photo"></div>
      <div className="info">
        <h4>informations</h4>
        <p>nom : {data?.name.toLowerCase()}</p>
        <p>taille : {data?.height} cm</p>
        <p>genre : {data?.gender}</p>
        <p>poids : {data?.mass} kg</p>
        <p>date de naissance : {data?.birth_year}</p>
        <p>couleur de peau : {data?.skin_color}</p>
        <p>couleur de cheveux : {data?.hair_color}</p>
        <p>couleur de yeux : {data?.eye_color}</p>
      </div>
    </div>
    <div>
      <h3>vehicules</h3>
      {data?.vehicles.map(vehicle => (
      <p><a>{vehicle}</a></p>
      ))}
    </div>
    <div>
      <h3>vaisseaux </h3>
      {data?.starships.map(starship => (
      <p><a>{starship}</a></p>
      ))}
    </div>
    <div>
      <h3>films</h3>
      {data?.films.map(film => (
        
        <p><a href='/films/1'>{film}</a></p>
      ))}
    </div>
  </div>;
}
