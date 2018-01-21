import React from 'react'
import styled from 'styled-components'

import Key from './Key'

const KeyRow = ({ className, keys }) => (
  <div className={className}>
    {keys.map((key, i) => {
      // This allows us to use simple arrays in keyboard config
      key = (typeof key === 'string') ? { label: key } : key

      // Extract label so we can prepend it on key prop
      const { label, ...rest } = key
      return <Key key={`${label}-${i}`} label={label} {...rest} />
    })}
  </div>
)

export default styled(KeyRow)`
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  height: 50px;
`
