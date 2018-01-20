import { connect } from 'react-redux'

import { selectBinding } from '../bindingsActions'
import BindingView from './BindingView'

const mapStateToProps = (state, ownProps) => {
  const selected = (state.bindings.selectedBinding || '') === ownProps.longName
  return { selected }
}

const mapDispatchToProps = { selectBinding }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BindingView)
