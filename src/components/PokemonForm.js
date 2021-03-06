import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.props.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" id="nameInput" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" id="hpInput" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" id="frontUrlInput" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" id="backUrlInput" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
