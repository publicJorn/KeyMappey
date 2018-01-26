export const REGISTER_KEYBOARD = 'REGISTER_KEYBOARD.Keyboard'
export const KEY_DOWN = 'KEY_DOWN.Keyboard'
export const KEY_UP = 'KEY_UP.Keyboard'

export function registerKeyboard (keyboard) {
  return {
    type: REGISTER_KEYBOARD,
    keyboard
  }
}

export function keyDown (key) {
  return {
    type: KEY_DOWN,
    key
  }
}

export function keyUp (key) {
  return {
    type: KEY_UP,
    key
  }
}
