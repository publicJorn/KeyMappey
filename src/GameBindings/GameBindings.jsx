import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'immutability-helper'

import bindAll from 'src/utils/bindAll'
import GameBindingsView from './GameBindingsView'
import { fetchGameData } from './bindingActions'

class GameBindingsContainer extends Component {
  constructor (props) {
    super(props)

    bindAll(this, 'onSelectBinding', 'getSelectedBinding')
  }

  componentDidMount () {
    if (this.props.game) {
      this.props.fetchGameData(this.props.game)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.game !== this.props.game) {
      this.props.fetchGameData(nextProps.game)
    }
  }

  render () {
    const { loading, error, gameData } = this.props
    return <GameBindingsView {...{ loading, error, gameData }} onSelectBinding={this.onSelectBinding} />
  }

  onSelectBinding (evt, longName) {
    const operation = {
      gameData: { bindings: {
        [longName]: { selected: { $set: true } }
      } }
    }

    const previouslySelected = this.getSelectedBinding()
    if (previouslySelected) {
      // When previously selected binding is clicked, it will simply unselect negating the $set above
      operation.gameData.bindings[previouslySelected.longName] = { $unset: ['selected'] }
    }

    this.setState(update(this.state, operation))
  }

  getSelectedBinding () {
    return Object.values(this.state.gameData.bindings).find((binding) => binding.selected)
  }
}

// We are interested in everything inside of the bindings slice of the state
const mapStateToProps = (state) => ({ ...state.bindings })

// Shortest way to do `bindActionCreators` is simply passing `key:value` pair.
// Put on const to make it more recognizable.
// https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux
const mapDispatchToProps = { fetchGameData }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBindingsContainer)
