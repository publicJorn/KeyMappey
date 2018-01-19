import { normalize, schema } from 'normalizr'

const binding = new schema.Entity('bindings', {}, { idAttribute: 'longName' })

const section = new schema.Entity('sections', {
  bindings: [ binding ]
}, { idAttribute: 'name' })

const gameSchema = {
  bindingSections: [ section ]
}

// Creates: { game, sections, bindings }
export default (gameBindings) => ({
  game: gameBindings.game,
  ...normalize(gameBindings, gameSchema).entities
})
