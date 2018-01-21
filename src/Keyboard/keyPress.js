import {
  keyDown as keyDownAction,
  keyUp as keyUpAction
} from './keyboardActions'

let dispatch

const pressed = []
const isPressed = (key) => pressed.some((k) => pressed.some((k) => k.a === key.a))
const pressedKeyId = (key) =>
  pressed.findIndex((k) => k.key === key.key && k.location === key.location)

const keyData = (evt) => ({
  key: evt.key,
  location: evt.location
})

function handleKeyDown (evt) {
  const key = keyData(evt)
  if (!isPressed(key)) {
    pressed.push(key)
    dispatch(keyDownAction(key))
  }
}

function handleKeyUp (evt) {
  const key = keyData(evt)
  pressed.splice(pressedKeyId(key), 1)
  dispatch(keyUpAction(key))
}

export default {
  init: (dispatcher) => {
    dispatch = dispatcher

    // TODO: Currently this only supports 1 keyDown at the same time
    // More reading: https://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once
    // Or use (a modified version of) https://github.com/publicJorn/Keypress
    document.body.addEventListener('keydown', handleKeyDown)
    document.body.addEventListener('keyup', handleKeyUp)
  },

  destroy: () => {
    document.body.removeEventListener('keydown', handleKeyDown)
    document.body.removeEventListener('keyup', handleKeyUp)
  }
}
