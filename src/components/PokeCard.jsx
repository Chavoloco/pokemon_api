import React from 'react'
import './PokeCard.css'

const PokeCard = ({pokemon}) => {

    const pokeimagenUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    return ( 
    <div className="card-body">
        <div className="imagen">
            <img src={`${pokeimagenUrl}${pokemon.id}.png`} alt="" />
        </div>
        <h1>Name: {pokemon['name']}</h1>
        <h1>Height: {pokemon.height}</h1>
        <h1>Weight: {pokemon.weight}</h1>
    </div>
     );
}
 
export default PokeCard;