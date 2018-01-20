import React from 'react'
import styled from 'styled-components'

import KeyRow from './KeyRow'

// TODO: Split redux logic

// TODO: further develop JSON structure for different layouts & multi-lang setup
// Add keyboard sections with props: XY (top left), angle, justify-content (for flexbox filling)
// Will require additional "KeySection" component
const rows = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', { label: 'delete', size: 1.5 }],
  [{ label: 'tab', size: 1.5 }, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  [{ label: 'capslock', size: 2 }, 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', { label: 'enter', size: 2 }],
  [{ label: 'shift', location: 1, size: 2.5 }, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', { label: 'shift', location: 2, size: 2.5 }],
  [
    { label: 'ctrl', location: 1 }, { label: 'meta', location: 1 }, { label: 'alt', location: 1 },
    { label: 'space', size: 6 },
    { label: 'alt', location: 2 }, { label: 'meta', location: 2 }, { label: 'ctrl', location: 2 }
  ]
]

const KeyBoard = ({ className }) => (
  <div className={className}>
    {rows.map((row, i) => <KeyRow key={`row${i}`} keys={row} />)}
  </div>
)

export default styled(KeyBoard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  height: 250px;
  margin: 0 auto;
`