import React, {useEffect} from "react";
import axios from "axios";

function Homepage({pokemonData, setPokemonData}) {
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
                console.log(response);
                setPokemonData(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [])

    return <div className="pokemon-page">
        <div className="pokemon-card">
            {Object.keys(pokemonData).length > 0 && <>
                <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                <p><b>Moves:</b> {pokemonData.moves.length}</p>
                <p><b>Weight:</b> {pokemonData.weight}</p>
                <p><b>Abilities:</b></p>
                <ul className="pokemon-abilities">
                    {pokemonData.abilities.map((entry) => {
                            return <li key={entry.ability.name}>{entry.ability.name}</li>
                        }
                    )}
                </ul>
            </>}
        </div>
    </div>
}

export default Homepage;