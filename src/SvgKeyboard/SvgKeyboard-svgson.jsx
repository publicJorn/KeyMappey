import React, { Component } from 'react'
import PropTypes from 'prop-types'
import svgson from 'svgson'

import { getAttr } from './utils'
import KeyGroup from './KeyGroup'
import RenderSVGSON from './RenderSVGSON'

// TODO: auto build & inject -> pass through svgo. Default settings and:
// - DO NOT cleanup ID's
// - DO remove script elements
const createSvgData = () =>
  svgson.parse(
    `
<svg viewBox="0 0 180 125" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5">
  <g id="design">
    <path fill="#d4d4d4" d="M0 0h179.339v124.551H0z" transform="scale(1.00369 1.0036)"/>
    <path d="M154.332 2.458l8.693 6.315-4.347 5.982 7.033 2.285-3.321 10.219-7.032-2.285v7.394h-10.744v-7.394l-7.032 2.285-3.32-10.219 7.032-2.285-4.346-5.982 8.692-6.315 4.346 5.982 4.346-5.982z" fill="#d4d4d4" stroke="#00ca00" stroke-width="3" transform="translate(1.309 4.075)"/>
    <text x="129.675" y="21.311" font-family="'Arial',sans-serif" font-size="8" fill="#003613" transform="translate(.481 3.04)">publicJorn</text>
  </g>
  <g id="keys">
    <g id="key_D">
      <path d="M1037.01 370.627c0 .277-.22.5-.5.5h-47.515a.5.5 0 01-.5-.5v-47.514a.5.5 0 01.5-.5h47.515c.28 0 .5.223.5.5v47.514z" fill="#da0000" fill-rule="nonzero" transform="translate(-867.67 -256.576)" id="key"/>
      <text x="17.848" y="76.62" font-family="'Arial',sans-serif" font-size="12" fill="#fff" transform="translate(107.026 3.007)" id="label">D</text>
    </g>
    <g id="key_S">
      <path d="M981.597 370.627c0 .277-.223.5-.5.5h-47.514a.5.5 0 01-.5-.5v-47.514a.5.5 0 01.5-.5h47.514c.277 0 .5.223.5.5v47.514z" fill="#da0000" fill-rule="nonzero" transform="translate(-867.67 -256.576)" id="key1"/>
      <text x="17.848" y="76.62" font-family="'Arial',sans-serif" font-size="12" fill="#fff" transform="translate(52.412 3.154)" id="label1">S</text>
    </g>
    <g id="key_A">
      <path d="M926.184 370.627c0 .277-.223.5-.5.5H878.17a.5.5 0 01-.5-.5v-47.514a.5.5 0 01.5-.5h47.514c.277 0 .5.223.5.5v47.514z" fill="#da0000" fill-rule="nonzero" transform="translate(-867.67 -256.576)" id="key2"/>
      <text x="17.848" y="76.62" font-family="'Arial',sans-serif" font-size="12" fill="#fff" transform="translate(-2.83 3.007)" id="label2">A</text>
    </g>
    <g id="key_W">
      <path d="M981.597 314.59c0 .277-.223.5-.5.5h-47.514a.5.5 0 01-.5-.5v-47.514a.5.5 0 01.5-.5h47.514c.277 0 .5.223.5.5v47.514z" fill="#da0000" fill-rule="nonzero" transform="translate(-867.67 -255.576)" id="key3"/>
      <text x="17.848" y="76.62" font-family="'Arial',sans-serif" font-size="12" fill="#fff" transform="translate(52.582 -53.03)" id="label3">W</text>
    </g>
  </g>
</svg>
`,
    {
      // svgson options
      camelcase: true,
      transformNode: (node) => {
        // Make sure that key `g` elements get an additional `qwertyKey` property
        // TODO: Investigate different layouts - may need a different identifier
        if (node.name === 'g' && getAttr(node, 'id')) {
          const [type, qwertyKey] = node.attributes.id.split('_')
          if (qwertyKey && ['key', 'label'].includes(type.toLowerCase())) {
            return { ...node, qwertyKey }
          }
        }

        return node
      },
    },
  )

// TODO: inject when user chooses other language layout
// Example: azerty
const customLabels = new Map([
  ['Label_D', 'D'],
  ['Label_S', 'S'],
  ['Label_A', 'Q'],
  ['Label_W', 'Z'],
])

// TODO: implement bind name
const bindings = new Map([
  ['Label_D', { short: 'Right', long: 'Move right' }],
  ['Label_S', { short: 'Down', long: 'Move down' }],
  ['Label_A', { short: 'Left', long: 'Move left' }],
  ['Label_W', { short: 'Up', long: 'Go forth and multiply' }],
])

class SvgKeyboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      json: null,
      jsonError: '',
    }
  }

  componentDidMount() {
    createSvgData().then((json) => {
      const groups = {}

      // Check if we have the groups we need, ignore any others
      for (const child of json.children) {
        const id = (child.attributes.id || '').toLowerCase()

        if (id.match(/design|keys/) && child.name === 'g' && child.children.length) {
          delete child.attributes.id
          groups[id] = child
        }
      }

      if (groups.keys) {
        // Reconstruct the children of json
        this.setState({ json: { ...json, children: groups } })
      } else {
        this.setState({ jsonError: 'Structure of keyboard SVG is incorrect' })
        console.error('Keyboard SVG: Missing `keys` group')
      }
    })
  }

  render() {
    const { json, jsonError } = this.state
    const { downKeys, showDesign } = this.props

    if (jsonError) return <p>{jsonError}</p>
    if (!json) return <p>Loading keyboard...</p>

    const { design, keys } = json.children

    return (
      <svg {...json.attributes}>
        {design && showDesign && (
          <g {...design.attributes} id="design">
            <RenderSVGSON {...design} />
          </g>
        )}

        <g {...keys.attributes} id="keyboard">
          {keys.children.map((keyGroup) => (
            <KeyGroup
              key={keyGroup.attributes.id}
              {...keyGroup}
              isDown={downKeys.includes(keyGroup.qwertyKey)}
            />
          ))}
        </g>
      </svg>
    )
  }
}

SvgKeyboard.propTypes = {
  downKeys: PropTypes.arrayOf(PropTypes.string),
  showDesign: PropTypes.bool,
}

SvgKeyboard.defaultProps = {
  downKeys: [],
  showDesign: true,
}

export default SvgKeyboard
