export const KEY_DOWN = 'KEY_DOWN.Keyboard'
export const KEY_UP = 'KEY_UP.Keyboard'

export function keyDown (key) {
  console.log('down', key)
  return {
    type: KEY_DOWN,
    key
  }
}

export function keyUp (key) {
  console.log('up', key)
  return {
    type: KEY_UP,
    key
  }
}
