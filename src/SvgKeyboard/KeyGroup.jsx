import React from 'react'
import PropTypes from 'prop-types'

import { selectById } from './utils'
import Key from './Key'
import Text from './Text'

const KeyGroup = ({ children, isDown }) => {
  const key = selectById(children, 'key')
  const label = selectById(children, 'label')

  return (
    <>
      <Key key={key.attributes.id} {...key} isDown={isDown} />
      <Text key={label.attributes.id} {...label} isDown={isDown} />
    </>
  )
}

KeyGroup.propTypes = {
  children: PropTypes.array.isRequired,
  isDown: PropTypes.bool,
}

KeyGroup.defaultProps = {
  isDown: false,
}

export default KeyGroup
