import React from 'react'
import PropTypes from 'prop-types'

const Key = ({ name, attributes, isDown }) => {
  if (name !== 'path') return null

  const { id, ...attrs } = attributes

  // TODO: replace with proper styling lib
  return <path {...attrs} fill={isDown ? 'cyan' : attributes.fill || '#fff'} />
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    d: PropTypes.string.isRequired,
  }),
  isDown: PropTypes.bool,
}

Text.defaultProps = {
  isDown: false,
}

export default Key
