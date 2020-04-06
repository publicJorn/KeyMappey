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
