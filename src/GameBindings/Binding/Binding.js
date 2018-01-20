import { connect } from 'react-redux'

import { selectBinding } from '../bindingActions'
import BindingView from './BindingView'

export default connect(
  null,
  { selectBinding }
)(BindingView)
