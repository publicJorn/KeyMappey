import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import bindings from './GameBindings/bindingReducer'

const rootReducer = combineReducers({
  bindings
})

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => createStore(
  rootReducer,
  enhancers
)
