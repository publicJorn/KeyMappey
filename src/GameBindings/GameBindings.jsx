import React, { Component } from 'react'
import styled from 'styled-components'

import GameBindingsContainer from './GameBindingsContainer'

const games = ['Steel division']

class GameBindingArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      game: 'steel-division'
    }
  }

  render () {
    const { className } = this.props

    return (
      <div className={className}>
        <h2>Map your key bindings:</h2>

        <select onChange={this.onSelectGame.bind(this)} defaultValue={this.state.game}>
          <option value='' disabled>Select game</option>
          {games.map((game) => {
            const gameId = game.toLowerCase().replace(/ /, '-')
            return <option key={gameId} value={gameId}>{game}</option>
          })}
        </select>

        <hr />
        <GameBindingsContainer game={this.state.game} />
      </div>
    )
  }

  onSelectGame (evt) {
    this.setState({ ...this.state, game: evt.target.value })
  }
}

export default styled(GameBindingArea)`
  margin-top: 2rem;
`
