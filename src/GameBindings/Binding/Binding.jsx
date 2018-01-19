import React from 'react'
import PropTypes from 'prop-types'
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
  border: 1px solid #ccc;

  .selected > & {
    border-color: cyan;
  }
`

const Binding = ({ className, longName, boundKey, selected, onSelectBinding }) => {
  const cn = classNames(className, { selected })
  return (
    <tr className={cn} onClick={(evt) => onSelectBinding(evt, longName)}>
      <Name>{longName}</Name>
      <Key>{boundKey}</Key>
    </tr>
  )
}

Binding.propTypes = {
  longName: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  defaultKey: PropTypes.string,
  boundKey: PropTypes.string,
  selected: PropTypes.bool
}

Binding.defaultProps = {
  defaultKey: '',
  boundKey: '',
  selected: false
}

export default styled(Binding)`
  padding-bottom: 2px;
  cursor: pointer;

  &.selected {
    color: cyan;
  }
`
