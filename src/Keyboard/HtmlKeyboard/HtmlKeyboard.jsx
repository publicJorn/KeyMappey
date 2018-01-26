import React from 'react'
import styled from 'styled-components'

import KeyRow from './KeyRow'

const KeyBoard = ({ className, rows }) => (
  <div className={className}>
    {rows.map((keyIds, i) => <KeyRow key={`row${i}`} keyIds={keyIds} />)}
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
