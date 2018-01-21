import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import bindings from './GameBindings/bindingsReducer'
import keyboard from './Keyboard/keyboardReducer'

const rootReducer = combineReducers({
  bindings,
  keyboard
})

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => createStore(
  rootReducer,
  enhancers
)
