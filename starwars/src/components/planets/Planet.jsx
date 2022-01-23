import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Film() {
  const [data,setData] = useState()
  const params = useParams()
  const id = params.id 

  useEffect(() =>{
    fetch("https://swapi.dev/api/planets/"+id)
      .then(res => {
        return res.json()
      })
      .then(async (resultat) => {
        setData(resultat)
      })
      
  },[])


  return <div>
      <h1>{data?.name}</h1>
  </div>;
}
