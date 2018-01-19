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
    console.log('down', key)
  }
}

function handleKeyUp (evt) {
  const key = keyData(evt)
  pressed.splice(pressedKeyId(key), 1)
  console.log('up', key)
}

export default {
  init: () => {
    document.body.addEventListener('keydown', handleKeyDown)
    document.body.addEventListener('keyup', handleKeyUp)
  },

  destroy: () => {
    document.body.removeEventListener('keydown', handleKeyDown)
    document.body.removeEventListener('keyup', handleKeyUp)
  }
}
