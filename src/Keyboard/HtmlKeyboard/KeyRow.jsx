import React from 'react'
import styled from 'styled-components'

import Key from './Key/Key'

const KeyRow = ({ className, keyIds }) => (
  <div className={className}>
    {keyIds.map((keyId) => {
      // Extract label so we can prepend it on key prop
      return <Key key={keyId} keyId={keyId} />
    })}
  </div>
)

export default styled(KeyRow)`
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  height: 50px;
`
