import React, { Component } from 'react'

import KeyBoard from './KeyBoard/KeyBoard'
import BindingSection from './BindingSection/BindingSection'
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
        <KeyBoard />
        <BindingSection />
      </div>
    )
  }
}
