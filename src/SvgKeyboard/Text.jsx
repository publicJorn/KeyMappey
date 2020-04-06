import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ name, attributes, children, isDown }) => {
  if (name !== 'text') return null
  const { id, ...attrs } = attributes

  return (
    // TODO: replace with proper styling lib
    <text {...attrs} fill={isDown ? 'black' : attrs.fill || ''}>
      {children[0].value}
    </text>
  )
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
  }),
  isDown: PropTypes.bool,
}

Text.defaultProps = {
  attributes: PropTypes.shape({
    fontFamily: 'sans-serif',
  }),
  isDown: false,
}

export default Text
