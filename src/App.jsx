import React, { Component } from 'react'

// import SvgKeyboard from './SvgKeyboard/SvgKeyboard-svgr'
import SvgKeyboard from './SvgKeyboard/SvgKeyboard-svgson'
import BindingSection from './BindingSection/BindingSection'
import DevNotes from './genericComponents/DevNotes'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDesign: true,
    }
  }

  toggleDesign = () => {
    this.setState({ showDesign: !this.state.showDesign })
  }

  render() {
    const { className } = this.props
    const { showDesign } = this.state

    return (
      <div className={className}>
        <h1>KeyMappey</h1>
        <SvgKeyboard downKeys={['W', 'A']} showDesign={showDesign} />

        <section>
          <label>
            <input
              type="checkbox"
              name="showdesign"
              checked={showDesign}
              onChange={this.toggleDesign}
            />{' '}
            Show design
          </label>
        </section>
        {/* <BindingSection /> */}
      </div>
    )
  }
}
