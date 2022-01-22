import './App.css';
import Characters from './components/characters/Characters';
import Character from './components/characters/Character';
import Planets from './components/planets/Planets';
import Planet from './components/planets/Planet';
import Starships from './components/starships/Starships';
import Starship from './components/starships/Starship';
import Navbar from './components/navbar/Navbar';
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/characters" element={<Characters />}/>
        <Route path="/characters/:id" element={<Character />}/>

        <Route path="/planets" element={<Planets />}/>
        <Route path="/planets/:id" element={<Planet />}/>

        <Route path="/starships" element={<Starships />}/>
        <Route path="/starships/:id" element={<Starship />}/>

      </Routes>
    </div>
  );
}

export default App;
