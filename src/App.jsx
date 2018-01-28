import React, { Component } from 'react'

import Keyboard from './Keyboard/Keyboard'
import BindingSection from './BindingSection/BindingSection'

export default class extends Component {
  render () {
    const { className } = this.props

    return (
      <div className={className}>
        <h1>KeyMappey</h1>
        <Keyboard />
        <BindingSection />
      </div>
    )
  }
}
