import update from 'immutability-helper'

import {
  FETCH_BINDINGS,
  FETCH_BINDINGS_ERROR,
  BINDINGS_FETCHED,
  SELECT_BINDING
} from './bindingsActions'
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
    const operation = {
      selectedBinding: {
        // Set new longName, or deselect if it was already selected
        $set: (state.selectedBinding !== longName) ? longName : ''
      }
    }
    return update(state, operation)
  }
})
