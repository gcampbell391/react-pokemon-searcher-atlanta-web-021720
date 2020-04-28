import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokemon: [],
      currentSearch: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allPokemon: data })
      })
  }

  handleSearchChange = (event) => {
    this.setState({ currentSearch: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let pokemonName = event.target.querySelector("#nameInput").value
    let pokemonHp = event.target.querySelector("#hpInput").value
    let pokemonFront = event.target.querySelector("#frontUrlInput").value
    let pokemonBack = event.target.querySelector("#backUrlInput").value
    const newPokemon = {
      name: pokemonName,
      sprites: {
        front: pokemonFront,
        back: pokemonBack
      },
      stats: [{}, {}, {}, {}, { value: pokemonHp }]
    }
    console.log(newPokemon)
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then(resp => resp.json())
      .then(newPokemon => {
        console.log("New Pokemon:", newPokemon)
        this.setState({ allPokemon: [...this.state.allPokemon, newPokemon] })
      })
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onChange={(event) => this.handleSearchChange(event)} />
        <br />
        <PokemonCollection
          allPokemon={this.state.allPokemon}
          pokemonSearchTerm={this.state.currentSearch}
        />
      </Container>
    )
  }
}

export default PokemonPage
