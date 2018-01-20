import { connect } from 'react-redux'

import { selectBinding } from '../bindingsActions'
import BindingView from './BindingView'

export default connect(
  null,
  { selectBinding }
)(BindingView)
