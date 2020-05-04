export function getAttr(obj, id) {
  if (obj.attributes && obj.attributes[id]) return obj.attributes.id
  return ''
}

export function selectById(collection, id, strict = false) {
  return collection.find((obj) => {
    if (obj.attributes && obj.attributes.id) {
      if (strict && obj.attributes.id === id) return true
      if (!strict && obj.attributes.id.substring(0, id.length) === id) return true
      return false
    }
  })
}

export const TextWidth = (function () {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  function setFont(font) {
    context.font = Object.values(font).join(' ')
  }

  function calc(text) {
    const textWidth = Math.ceil(context.measureText(text).width)
    return textWidth
  }

  return { setFont, calc }
})()

export function buildLines(text, maxWidth, maxLines = 2) {
  let words = text.split(' ')
  let remainingWords = []
  const linesToSet = []

  while (words.length > 0) {
    const line = words.join(' ')
    const lineLength = TextWidth.calc(line)

    if (lineLength <= maxWidth) {
      linesToSet.push(line)
      words = remainingWords.slice(0)
      remainingWords = []

      // If moret than two lines, show horizontal ellipsis on second line
      if (words.length && linesToSet.length === maxLines) linesToSet[1] += '…'
    } else if (words.length === 1) {
      linesToSet.push(words.pop())
    } else {
      remainingWords.unshift(words.pop())
    }
  }

  return linesToSet
}
