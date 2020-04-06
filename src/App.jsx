import React, { Component } from 'react'

// import SvgKeyboard from './SvgKeyboard/SvgKeyboard-svgr'
import SvgKeyboard from './SvgKeyboard/SvgKeyboard-svgson'
import BindingSection from './BindingSection/BindingSection'
import DevNotes from './genericComponents/DevNotes'

export default class extends Component {
  render() {
    const { className } = this.props

    return (
      <div className={className}>
        <h1>KeyMappey</h1>
        <SvgKeyboard downKeys={['W', 'A']} />
        {/* <BindingSection /> */}
      </div>
    )
  }
}
