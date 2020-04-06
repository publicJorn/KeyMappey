import { createSelector } from 'reselect'
// import { getPressedKey } from 'src/Keyboard/keyboardSelectors'

const getBindings = (state) => {
  return (state.bindings.gameData) ? state.bindings.gameData.bindings : {}
}

const filterByBoundKeyLabel = (bindings, keyLabel) => {
  const b = Object.keys(bindings).find((b) => bindings[b].boundKey === keyLabel)
  return bindings[b]
}

export const filterSelectedBinding = (bindings) => {
  const b = Object.keys(bindings).find((b) => bindings[b].selected)
  return bindings[b]
}

export const getSelectedBinding = createSelector(
  [getBindings],
  (bindings) => filterSelectedBinding(bindings)
)

export const getBindingAndKeyMatch = createSelector(
  [getBindings, /*getPressedKey,*/ getSelectedBinding],
  (allBindings, key, binding) => {
    // TODO: After MVP show a nice warning for the user if key was already bound
    if (binding && key && !filterByBoundKeyLabel(allBindings, key.label)) {
      return { binding, key }
    }

    return null
  }
)
