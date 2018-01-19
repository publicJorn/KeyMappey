import {
  FETCH_BINDINGS,
  FETCH_BINDINGS_ERROR,
  BINDINGS_FETCHED
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
  }
})
