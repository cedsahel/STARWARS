import React from 'react';
import { useParams } from 'react-router-dom';

export default function Character() {
    const params = useParams()
    const id = params.id
  return <div>
      <h1>FICHE PERSONNAGE {id}</h1>
  </div>;
}
