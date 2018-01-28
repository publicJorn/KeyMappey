import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Name = styled.td`
  padding: 0;
  min-width: 150px;
`

const Key = styled.td`
  width: 50px;
  padding: 0;
  text-align: center;
  font-size: .7rem;
  border: 1px solid #ccc;
  color: #00C000;

  .selected > & {
    border-color: #00C000;
  }
`

const Binding = ({ className, longName, boundKey, selected, selectBinding }) => {
  const cn = classNames(className, { selected })
  const handleClick = (evt) => {
    evt.preventDefault()
    selectBinding(longName)
  }

  return (
    <tr className={cn} onClick={handleClick}>
      <Name>{longName}</Name>
      <Key>{boundKey}</Key>
    </tr>
  )
}

export default styled(Binding)`
  padding-bottom: 2px;
  cursor: pointer;

  &.selected {
    color: #00C000;
  }
`
