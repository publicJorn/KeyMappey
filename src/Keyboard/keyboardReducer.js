import update from 'immutability-helper'
import isEqual from 'lodash/isEqual'

import {
  KEY_DOWN,
  KEY_UP
} from './keyboardActions'
import createReducer from 'src/utils/createReducer'

const defaultKeyboardState = {
  keysDown: []
}

export default createReducer(defaultKeyboardState, {
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
