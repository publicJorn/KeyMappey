import React, { Component } from 'react'
import { connect } from 'react-redux'

import { registerKeyboard } from './keyboardActions'
import keyPress from './keyPress'
import HtmlKeyboard from './HtmlKeyboard/HtmlKeyboard'

// For now we just support one keyboard
import keyboard from './simple-querty.json'

class Keyboard extends Component {
  componentDidMount () {
    keyPress.init(this.props.dispatch)
    this.props.dispatch(registerKeyboard(keyboard))
  }

  componentWillUnmount () {
    keyPress.destroy()
  }

  render () {
    return <HtmlKeyboard rows={this.props.rows} />
  }
}

const mapStateToProps = (state) => ({
  rows: state.keyboard.rows
})

export default connect(
  mapStateToProps
)(Keyboard)
