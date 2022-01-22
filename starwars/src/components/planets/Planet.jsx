import React from 'react';
import { useParams } from 'react-router-dom';

export default function Planet() {
    const params = useParams()
    const id = params.id
  return <div>
      <h1>Fiche planete n°{id}</h1>
  </div>;
}
