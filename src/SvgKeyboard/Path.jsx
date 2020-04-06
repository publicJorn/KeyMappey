import React from 'react'
import PropTypes from 'prop-types'

const Path = ({ path, isPressed }) => {
  if (path.name !== 'path') return null
  const { id, ...attrs} = path.attributes

  return <path {...attrs} />
}

Text.propTypes = {
  path: PropTypes.object.isRequired,

}

export default Path
