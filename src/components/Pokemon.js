import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toFirstCharacterUppercase } from '../functions';

const Pokemon = (props) => {

    const { history, match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [ pokemon, setPokemon ] = useState(undefined);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((err) => {
                console.log(err)
                setPokemon(false)
            })
    }, [pokemonId])

    const pokemonJSX = () => {
        // const { name, id, species, height, weight, types, sprites } = pokemon;
        const { name, id, sprites } = pokemon;
        const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <div className='pokemon__header'>
                    <h1>`${id}.` {toFirstCharacterUppercase(name)}</h1>
                    <img src={front_default} alt='pokemon' />
                </div>
                <div className="pokemon__main">
                    <img src={pokemonImg} alt='pokemon' style={{width: '300px', height: '300px'}} />
                </div>
            </>
        )
    }

    return (
        <>
            {pokemon === undefined && 'loading'}
            {pokemon !== undefined && pokemon && pokemonJSX()}
            {pokemon === false && <h1>Pokemon Not Found</h1>}

            <button onClick={() => history.push('/')}>Back to Pokedex</button>
        </>
    )
}

export default Pokemon