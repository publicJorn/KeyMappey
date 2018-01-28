import { createSelector } from 'reselect'
import { getPressedKey } from 'src/Keyboard/keyboardSelectors'

const getBindings = (state) => {
  return (state.bindings.gameData) ? state.bindings.gameData.bindings : {}
}

export const filterSelectedBinding = (bindings) => {
  const b = Object.keys(bindings).find((b) => bindings[b].selected)
  return bindings[b]
}

export const getSelectedBinding = createSelector(
  [ getBindings ],
  (bindings) => filterSelectedBinding(bindings)
)

export const getBindingAndKeyMatch = createSelector(
  [ getPressedKey, getSelectedBinding ],
  (key, binding) => {
    return (binding && key) ? { binding, key } : null
  }
)
