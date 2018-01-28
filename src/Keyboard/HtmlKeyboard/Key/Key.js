import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import KeyView from './KeyView'

KeyView.propTypes = {
  label: PropTypes.string.isRequired,
  location: PropTypes.number,
  size: PropTypes.number,
  isDown: PropTypes.bool
}

KeyView.defaultProps = {
  location: 0,
  size: 1,
  isDown: false
}

const mapStateToProps = (state, ownProps) => ({
  ...state.keyboard.keys[ownProps.keyId]
})

export default connect(mapStateToProps)(KeyView)
