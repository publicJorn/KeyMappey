import update from 'immutability-helper'

import {
  FETCH_BINDINGS,
  FETCH_BINDINGS_ERROR,
  BINDINGS_FETCHED,
  SELECT_BINDING,
  MATCH_KEY_BINDING
} from './bindingsActions'
import { filterSelectedBinding } from './bindingSelectors'
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
    const previouslySelectedBinding = filterSelectedBinding(state.gameData.bindings)
    const { longName } = action

    const operation = {
      gameData: { bindings: { [longName]: { selected: { $set: true } } } }
    }
    if (previouslySelectedBinding) {
      const prevLongName = previouslySelectedBinding.longName
      operation.gameData.bindings[prevLongName] = { $unset: ['selected'] }
    }

    return update(state, operation)
  },

  [MATCH_KEY_BINDING] (state, action) {
    const { key, binding } = action
    const { longName } = binding
    const { label } = key

    const operation = {
      gameData: { bindings: { [longName]: { boundKey: { $set: label } } } }
    }

    return update(state, operation)
  }
})
