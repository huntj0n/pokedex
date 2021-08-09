import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokedex = props => {

    const [pokemonData, setPokemonData] = useState({});
    const [ filter, setFilter ] = useState('');

    useEffect (() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then((response) => {
                const responsePokemonData = {}

                response.data.results.forEach((pokemon, index) => {
                    responsePokemonData[index] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index + 1}.png`
                    }
                })
                setPokemonData(responsePokemonData)
            })
            .catch((err) => console.log(err))
    }, [])

    const toFirstCharacterUppercase = name => 
    name.charAt(0).toUpperCase() + name.slice(1);

    const getPokemonCard = (pokemonId) => {
        // console.log((pokemonData[`${pokemonId}`]))

        const {id, name, sprite } = pokemonData[pokemonId]
        const cardInfo = `${id}. ${toFirstCharacterUppercase(name)}`

        return (
            <div key={pokemonId}>
                <img src={sprite} alt="" />
                <p>{cardInfo}</p>
            </div>
        )
    }

    return (
        <div>
            { pokemonData ? ( 
                <div>
                    {Object.keys(pokemonData).map(
                        (pokemonId)  => 
                        pokemonData[pokemonId].name.includes(filter) &&
                        getPokemonCard(pokemonId)
                    )}
                </div>
             ) : ( 
                 'loading...'
              ) }
        </div>
    )
}

export default Pokedex