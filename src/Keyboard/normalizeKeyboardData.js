import { normalize, schema } from 'normalizr'
import map from 'lodash/map'

const keySchema = new schema.Entity('keys', {}, {
  idAttribute: (key) => {
    const label = key.label.toLowerCase()
    const location = key.location || 0
    return `k${label}${location}`
  }
})

const rowSchema = new schema.Entity('rows', {
  keys: [ keySchema ]
}, {
  idAttribute: (keys, { rows }) => rows.indexOf(keys),
  processStrategy: (keys) => ({ keys })
})

const keyboardSchema = {
  rows: [ rowSchema ]
}

export default (keyboardData) => {
  const { rows, keys } = normalize(keyboardData, keyboardSchema).entities
  const rowsMap = map(rows, (row) => row.keys)

  return {
    rows: rowsMap,
    keys
  }
}
