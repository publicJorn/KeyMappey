import React, { Component } from 'react'
import styled from 'styled-components'

import GameBindings from 'src/GameBindings/GameBindings'

const games = ['Steel division']

// TODO: Cut up in multiple components & separate game list fetching logic
class GameBindingArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: ''
    }
  }

  render() {
    const { className } = this.props
    const welcomeText = (this.state.game === '') ? 'Choose a game' : 'Define your key bindings'

    return (
      <div className={className}>
        <h2>{welcomeText}:</h2>

        <select onChange={this.onSelectGame.bind(this)} defaultValue={this.state.game}>
          <option value='' disabled>Select game</option>
          {games.map((game) => {
            const gameId = game.toLowerCase().replace(/ /, '-')
            return <option key={gameId} value={gameId}>{game}</option>
          })}
        </select>

        <hr />
        <GameBindings game={this.state.game} />
      </div>
    )
  }

  onSelectGame(evt) {
    this.setState({ game: evt.target.value })
  }
}

export default styled(GameBindingArea)`
  margin-top: 2rem;
`
