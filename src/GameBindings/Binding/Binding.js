import { connect } from 'react-redux'

import { selectBinding } from '../bindingsActions'
import BindingView from './BindingView'

const mapDispatchToProps = { selectBinding }

export default connect(
  null,
  mapDispatchToProps
)(BindingView)
