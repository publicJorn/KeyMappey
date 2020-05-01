import React from 'react'
import PropTypes from 'prop-types'

import { selectById } from './utils'
import Key from './Key'
import Text from './Text'

const KeyGroup = ({ attributes, children, isDown }) => {
  const key = selectById(children, 'key')
  const label = selectById(children, 'label')

  return (
    <g id={attributes.id}>
      <Key {...key} className="key" isDown={isDown} />
      <Text {...label} className="label" isDown={isDown} />
    </g>
  )
}

KeyGroup.propTypes = {
  attributes: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  children: PropTypes.array.isRequired,
  isDown: PropTypes.bool,
}

KeyGroup.defaultProps = {
  isDown: false,
}

export default KeyGroup
