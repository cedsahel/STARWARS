import React from 'react';
import { useParams } from 'react-router-dom';


export default function Speci() {
    const params = useParams()
    const id = params.id

  return <div>
      <h1>FICHE ESPECES {id}</h1>
  </div>;
}
