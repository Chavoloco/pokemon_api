import React, {useState} from 'react'
import './Pokedex.css'
import PokeHeader from "./PokeHeader"
import PokeCard from "./PokeCard"


let offset = 0
const Pokedex = () => {

    const [pokemon, guardarPokemon] = useState([])

    let pokeArray = []

    const queryApi = async () =>{
        const pokemonApiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`
        offset +=10
        const fetchApi = await fetch(pokemonApiUrl)
        const getPokemon = await fetchApi.json()
        // console.log(getPokemon)
        // guardarPokemon(getPokemon)
        let entradas = getPokemon.results
        pokeArray = []        
        for (let index = 0; index < entradas.length; index++) {
            const element = entradas[index].url;
            const fetchApi1 = await fetch(element)
            const getPokemon1 = await fetchApi1.json()
            pokeArray.push(getPokemon1)
            // console.log(pokeArray);
        }
        guardarPokemon(pokeArray)
        // guardarPokemon(pokeArray)
    }
       
    console.log(pokemon);
    
    return(
        <div className="fondo">
            <PokeHeader />
            <div className="cards">
                { pokemon.map( item => <PokeCard key={item.id} pokemon={item}/> ) } 
            </div>
            <div className="button">
            <button onClick={queryApi}> Aprienta aquí para obtener Pokemons</button>
            </div>
        </div>

    )
}
 
export default Pokedex;