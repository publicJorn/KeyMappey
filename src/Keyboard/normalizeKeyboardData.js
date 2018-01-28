import { normalize, schema } from 'normalizr'
import map from 'lodash/map'

const keySchema = new schema.Entity('keys', {}, {
  idAttribute: 'uid',
  // Create a uid for the key. This will be added as prop and also be used as idAttribute
  processStrategy: (key) => {
    const label = key.label.toLowerCase()
    const location = key.location || 0
    key.uid = `k${label}${location}`
    return { ...key }
  }
})

const rowSchema = new schema.Entity('rows', {
  keys: [ keySchema ]
}, {
  idAttribute: (keys, { rows }) => rows.indexOf(keys),
  // We need to group the keys within a property matching this schema (in this case `keys`)
  // in order to make normalizr process our original nested rows array `rows = [[], []]`
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
