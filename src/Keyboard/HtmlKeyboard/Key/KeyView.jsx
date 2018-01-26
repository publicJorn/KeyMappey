import React from 'react'
import styled from 'styled-components'

const Key = ({ className, label }) => (
  <div className={className}>
    <span className='label'>{label}</span>
  </div>
)

const calcFlex = ({ size }) =>
  (size === 'auto') ? '1 1 auto' : `${size || 1} 1 0`

export default styled(Key)`
  position: relative;
  flex: ${calcFlex};
  border: 1px solid #999;
  border-radius: 3px;
  margin: 0 5px 5px 0;
  background-color: ${props => props.down ? '#fff' : '#eee'};

  .label {
    position: absolute;
    top: 2px;
    left: 3px;
    max-width: calc(100% - 6px);
    font-size: .85rem;
    color: ${props => props.down ? 'hotpink' : '#666'};
  }
`
