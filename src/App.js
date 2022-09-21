import React, {useState} from 'react';
import './App.css';
import Homepage from "./components/Homepage";

function App() {
  const [pokemonData, setPokemonData] = useState({});

  return (
      <Homepage
          pokemonData={pokemonData}
          setPokemonData={setPokemonData}
      />
  );
}

export default App;
