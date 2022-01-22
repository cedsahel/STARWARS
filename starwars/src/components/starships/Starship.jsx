import React from 'react';
import { useParams } from 'react-router-dom';

export default function Starship() {

  const params = useParams()
  const id = params.id

  
  return <div>
    <h1>fiche vaissaux n°{id}</h1>
  </div>;
}
