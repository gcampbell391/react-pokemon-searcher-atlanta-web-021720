import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const allPokemon = this.props.allPokemon
    return (
      <Card.Group itemsPerRow={6}>
        {allPokemon.map(pokemon => {
          return pokemon.name.includes(this.props.pokemonSearchTerm) && <PokemonCard pokemon={pokemon} key={pokemon.id} />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
