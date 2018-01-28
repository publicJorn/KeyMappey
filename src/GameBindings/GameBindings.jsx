import React, { Component } from 'react'
import { connect } from 'react-redux'

import GameBindingsView from './GameBindingsView'
import { fetchGameData, matchKeyAndBinding } from './bindingsActions'
import { getBindingAndKeyMatch } from './bindingSelectors'

class GameBindingsContainer extends Component {
  componentDidMount () {
    if (this.props.game) {
      this.props.fetchGameData(this.props.game)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { game, bindingAndKeyMatch } = this.props

    if (nextProps.game !== game) this.props.fetchGameData(nextProps.game)
    if (bindingAndKeyMatch) this.props.matchKeyAndBinding(bindingAndKeyMatch)
  }

  render () {
    const { loading, error, gameData } = this.props
    return <GameBindingsView {...{ loading, error, gameData }} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  // Everything in the bindings slice of the state & check if we have a match
  ...state.bindings,
  bindingAndKeyMatch: getBindingAndKeyMatch(state)
})

const mapDispatchToProps = { fetchGameData, matchKeyAndBinding }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBindingsContainer)
