import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import bindings from './GameBindings/bindingsReducer'
import keyboard from './Keyboard/keyboardReducer'

const rootReducer = combineReducers({
  bindings,
  keyboard
})

const composeEnhancers = (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancers = composeEnhancers(
  applyMiddleware(thunk)
)

export default () => createStore(
  rootReducer,
  enhancers
)
