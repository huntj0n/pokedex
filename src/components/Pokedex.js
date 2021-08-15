import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { toFirstCharacterUppercase } from '../functions';

const Pokedex = props => {

    const { history } = props
    const [pokemonData, setPokemonData] = useState({});
    const [ filter, setFilter ] = useState('');

    const handleSearch = (e) => {
        setFilter(e.target.value)
    }

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

    const getPokemonCard = (pokemonId) => {
        // console.log((pokemonData[`${pokemonId}`]))

        const {id, name, sprite } = pokemonData[pokemonId]
        const cardInfo = `${id}. ${toFirstCharacterUppercase(name)}`

        return (
            <div key={pokemonId} className='pokeCard' 
                onClick={() => {
                    let index = +pokemonId + 1
                    history.push(`/${index}`)
                    //pokemonId isnt incrementing properly, without the index variable it will push user to the wrong pokemon page.
                }}>

                <img src={sprite} alt="pokemon" />
                <p>{cardInfo}</p>
            </div>
        )
    }


    return (
        <div className='pokedex'>

            <div className='pokedex__searchContainer'>
                <input type="text" name='pokeSearch' className='pokeSearch-input' onChange={handleSearch}/>
                <label htmlFor="pokeSearch" className='pokeSearch-label'  >
                    <span className='content-search'>Search Pokemon</span>
                </label>
            </div>

            { pokemonData ? ( 
                <div className='pokedex__gridContainer'>
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
