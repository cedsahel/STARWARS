import React from 'react';
import { useParams } from 'react-router-dom';

export default function Film() {

  const params = useParams()
  const id = params.id 
  return <div>
      <h1>FILM n°{id}</h1>
  </div>;
}
