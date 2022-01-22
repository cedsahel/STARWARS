import React from 'react';
import { useParams } from 'react-router-dom';

export default function Vehicle() {
    const params = useParams()
    const id = params.id
  return <div>
    <h1>FICHE VEHICULE n° {id}</h1>
  </div>;
}
