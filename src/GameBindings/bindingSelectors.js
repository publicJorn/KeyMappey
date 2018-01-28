import { createSelector } from 'reselect'
import { getPressedKey } from 'src/Keyboard/keyboardSelectors'

const getBindings = (state) => {
  let bindings = (state.bindings.gameData) ? state.bindings.gameData.bindings : {}
  console.log('- getBindings')
  return bindings
}

export const filterSelectedBinding = (bindings) => {
  const b = Object.keys(bindings).find((b) => bindings[b].selected)
  console.log('- - filterSelectedBinding')
  return bindings[b]
}

export const getSelectedBinding = createSelector(
  [ getBindings ],
  (bindings) => {
    console.log('- - - getSelectedBinding')
    return filterSelectedBinding(bindings)
  }
)

export const getBindingAndKeyMatch = createSelector(
  [ getPressedKey, getSelectedBinding ],
  (key, binding) => {
    console.log('getBindingAndKeyMatch')
    return (binding && key) ? { binding, key } : null
  }
)
