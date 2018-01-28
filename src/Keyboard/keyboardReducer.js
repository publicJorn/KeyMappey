import update from 'immutability-helper'

import {
  REGISTER_KEYBOARD,
  KEY_DOWN,
  KEY_UP
} from './keyboardActions'
import createReducer from 'src/utils/createReducer'
import normalize from './normalizeKeyboardData'

const defaultKeyboardState = {
  rows: [],
  keys: {}
}

const toggleDown = (state, id, isDown) => {
  if (!state.keys[id]) {
    console.warn(`Key with id '${id}' is not found in store.`)
    return {}
  }

  return {
    keys: {
      [id]: {
        isDown: { $set: isDown }
      }
    }
  }
}

export default createReducer(defaultKeyboardState, {
  [REGISTER_KEYBOARD] (state, { keyboard }) {
    return { ...normalize(keyboard) }
  },

  [KEY_DOWN] (state, action) {
    const { key, location } = action.key
    return update(state, toggleDown(state, `k${key}${location}`, true))
  },

  [KEY_UP] (state, action) {
    const { key, location } = action.key
    return update(state, toggleDown(state, `k${key}${location}`, false))
  }
})
