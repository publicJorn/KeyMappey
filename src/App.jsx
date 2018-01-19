import React, { Component } from 'react'

import HtmlKeyBoard from './HtmlKeyBoard/KeyBoard'
import GameBindings from './GameBindings/GameBindings'
import keyPress from './utils/keyPress'

export default class extends Component {
  componentDidMount () {
    keyPress.init()
  }

  componentWillUnmount () {
    keyPress.destroy()
  }

  render () {
    const { className } = this.props

    return (
      <div className={className}>
        <h1>KeyMappey</h1>
        <HtmlKeyBoard />
        <GameBindings />
      </div>
    )
  }
}
