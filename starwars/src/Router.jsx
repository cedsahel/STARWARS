import React from 'react';
import {Routes,Route} from "react-router-dom"


import Characters from './components/characters/Characters';
import Character from './components/characters/Character';

import Planets from './components/planets/Planets';
import Planet from './components/planets/Planet';

import Starships from './components/starships/Starships';
import Starship from './components/starships/Starship';

import Species from './components/species/Species';
import Speci from './components/species/Speci';

import Films from './components/films/Films';
import Film from './components/films/Film';

import Vehicles from './components/vehicles/Vehicles';
import Vehicle from './components/vehicles/Vehicle';

export default function Router() {
  return <div>
            <Routes>

                <Route path="/characters" element={<Characters />}/>
                <Route path="/characters/:id" element={<Character />}/>

                <Route path="/planets" element={<Planets />}/>
                <Route path="/planets/:id" element={<Planet />}/>

                <Route path="/starships" element={<Starships />}/>
                <Route path="/starships/:id" element={<Starship />}/>

                <Route path="/films" element={<Films />}/>
                <Route path="/films/:id" element={<Film />}/>

                <Route path="/species" element={<Species />}/>
                <Route path="/species/:id" element={<Speci />}/>

                <Route path="/vehicles" element={<Vehicles />}/>
                <Route path="/vehicles/:id" element={<Vehicle />}/>

            </Routes>
  </div>;
}
