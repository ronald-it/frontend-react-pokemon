import React, {useEffect, useState} from "react";
import axios from "axios";

function Pokemon({endpoint}) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(endpoint);
                setPokemon(data);
            } catch(e) {
                console.error(e);
            }
        }

        fetchData();
    }, [endpoint])

    return <div className="pokemon-card">
            {Object.keys(pokemon).length > 0 && <>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.sprites.front_default} alt="Pokemon afbeelding"/>
                <p><b>Moves:</b> {pokemon.moves.length}</p>
                <p><b>Weight:</b> {pokemon.weight}</p>
                <p><b>Abilities:</b></p>
                <ul className="pokemon-abilities">
                    {pokemon.abilities.map((entry) => {
                            return <li key={entry.ability.name}>{entry.ability.name}</li>
                        }
                    )}
                </ul>
            </>}
        </div>
}

export default Pokemon;