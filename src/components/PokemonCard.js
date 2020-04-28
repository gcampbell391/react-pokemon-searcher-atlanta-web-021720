import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  //Toggle Pokemon image forwards and backwards 
  handleImageClick = (event) => {
    console.log(event.target)
    event.target.src === this.props.pokemon.sprites.back ?
      event.target.src = this.props.pokemon.sprites.front
      :
      event.target.src = this.props.pokemon.sprites.back
  }

  render() {
    let pokemon = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img alt={pokemon.name} src={pokemon.sprites.front} onClick={(event) => this.handleImageClick(event)} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[4].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
