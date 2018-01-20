import update from 'immutability-helper'

import {
  FETCH_BINDINGS,
  FETCH_BINDINGS_ERROR,
  BINDINGS_FETCHED,
  SELECT_BINDING
} from './bindingActions'
import createReducer from 'src/utils/createReducer'
import normalize from './normalizeGameData'

const defaultBindingState = {
  fetching: false,
  error: '',
  gameData: null
}

export default createReducer(defaultBindingState, {
  [FETCH_BINDINGS] (state, action) {
    return {
      ...state,
      fetching: true,
      error: ''
    }
  },

  [FETCH_BINDINGS_ERROR] (state, action) {
    return {
      ...state,
      fetching: false,
      error: action.error
    }
  },

  [BINDINGS_FETCHED] (state, action) {
    const gameData = normalize(action.data)

    return {
      loading: false,
      error: '',
      gameData
    }
  },

  [SELECT_BINDING] (state, action) {
    const { longName } = action
    const previouslySelected = getCurrentlySelectedBinding(state)
    const operation = {
      gameData: { bindings: {
        [longName]: { selected: { $set: true } }
      } }
    }

    if (previouslySelected) {
      // When previously selected binding is clicked, it will simply unselect negating the $set above
      operation.gameData.bindings[previouslySelected.longName] = { $unset: ['selected'] }
    }
    return update(state, operation)
  }
})

function getCurrentlySelectedBinding (state) {
  return Object.values(state.gameData.bindings).find((binding) => binding.selected)
}
