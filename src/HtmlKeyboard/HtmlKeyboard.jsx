import React from 'react'
import styled from 'styled-components'

import KeyRow from './KeyRow'

const KeyBoard = ({ className, rows }) => (
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
