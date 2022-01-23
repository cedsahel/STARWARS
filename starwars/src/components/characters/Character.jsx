import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./fiche.css"

export default function Character() {
    const params = useParams()
    const id = params.id
    const [data,setData] = useState()

    useEffect(() => {
      fetch("https://swapi.dev/api/people/"+id)
        .then( res => {
          return res.json()
        })
        .then( async (resultat) => {
          setData(resultat)
        })
    },[])

    console.log(data)
  return <div>
      <h1>{data?.name}</h1>

  </div>;
}
