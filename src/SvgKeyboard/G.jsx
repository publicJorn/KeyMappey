import React from 'react'
import PropTypes from 'prop-types'

const G = ({ isVisible, children, ...attrs }) => {
  return isVisible ? <g {...attrs}>{children}</g> : null
}

G.propTypes = {
  isVisible: PropTypes.bool,
}

G.defaultProps = {
  isVisible: true,
}

export default G
