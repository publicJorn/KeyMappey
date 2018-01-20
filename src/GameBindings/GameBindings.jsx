import React, { Component } from 'react'
import { connect } from 'react-redux'

import GameBindingsView from './GameBindingsView'
import { fetchGameData } from './bindingActions'

class GameBindingsContainer extends Component {
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
    return <GameBindingsView {...{ loading, error, gameData }} />
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
