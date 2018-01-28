import { createSelector } from 'reselect'

const getKeys = (state) => state.keyboard.keys

export const getPressedKey = createSelector(
  [ getKeys ],
  (keys) => {
    const k = Object.keys(keys).find((k) => keys[k].isDown)
    return keys[k]
  }
)
