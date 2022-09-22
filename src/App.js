import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";
import logo from "./assets/612ce4761b9679000402af1c.png"
import Button from "./components/Button";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [endpoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        toggleError(false);
        toggleLoading(true);

        async function fetchData() {
            try {
                const {data} = await axios.get(endpoint);
                setPokemons(data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        toggleLoading(false);

        fetchData();

    }, [endpoint]);

    return (
        <div className="outer-container">
            <img className="pokemon-logo" src={logo} alt="Pokemon logo"/>
            <div className="buttons-div">
                <Button
                    disabled={!pokemons.previous}
                    onClick={() => {
                        setEndPoint(pokemons.previous)
                    }}
                >
                    Vorige
                </Button>
                <Button
                    disabled={!pokemons.next}
                    onClick={() => {
                        setEndPoint(pokemons.next)
                    }}
                >
                    Volgende
                </Button>
            </div>
            {error &&
                <span className="error-message">
                        Er is iets fout gegaan! Probeer de pagina te refreshen.
                    </span>
            }
            {loading && <span className="loading-message">
                        Laden...
                        </span>
            }
            <div className="poke-deck">
                {Object.keys(pokemons).length > 0 && pokemons.results.map((pokemon) => {
                    return <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
                })}
            </div>
        </div>
    )
}

export default App;
