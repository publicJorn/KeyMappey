export const KEY_DOWN = 'KEY_DOWN.Keyboard'

export function keyDown (key) {
  return {
    type: KEY_DOWN,
    key
  }
}
