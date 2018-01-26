import update from 'immutability-helper'
import isEqual from 'lodash/isEqual'

import {
  REGISTER_KEYBOARD,
  KEY_DOWN,
  KEY_UP
} from './keyboardActions'
import createReducer from 'src/utils/createReducer'
import normalize from './normalizeKeyboardData'

const defaultKeyboardState = {
  rows: [],
  keys: []
}

export default createReducer(defaultKeyboardState, {
  [REGISTER_KEYBOARD] (state, { keyboard }) {
    return { ...normalize(keyboard) }
  },

  [KEY_DOWN] (state, action) {
    const operation = {
      keysDown: { $push: [action.key] }
    }

    return update(state, operation)
  },

  [KEY_UP] (state, action) {
    const idx = state.keysDown.findIndex((key) => isEqual(key, action.key))
    const keysDown = state.keysDown

    if (idx > -1) {
      keysDown.splice(idx, 1)
    }

    return {
      ...state,
      keysDown
    }
  }
})
