import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectBinding } from '../bindingsActions'
import BindingView from './BindingView'

const mapDispatchToProps = { selectBinding }

BindingView.propTypes = {
  longName: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  defaultKey: PropTypes.string,
  boundKey: PropTypes.string,
  selected: PropTypes.bool
}

BindingView.defaultProps = {
  defaultKey: '',
  boundKey: '',
  selected: false
}

export default connect(
  null,
  mapDispatchToProps
)(BindingView)
