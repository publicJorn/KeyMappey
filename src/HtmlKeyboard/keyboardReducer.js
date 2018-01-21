import {
  KEY_DOWN
} from './keyboardActions'
import createReducer from 'src/utils/createReducer'

const defaultKeyboardSlice = {
  down: []
}

export default createReducer(defaultKeyboardSlice, {
  [KEY_DOWN] (state, action) {
    return { ...state }
  }
})
