const fs = require('fs-extra')

Promise.resolve()
  .then(clean)
  .then(copy)
  .then(createGamesList)
  .then(() => console.log('\nRunning webpack...'))
  .catch((err) => console.error(err) && process.exit(1))

/**
 * Replacement for rimraf
 */
function clean () {
  return fs.remove('./docs')
    .then(() => console.log('- Cleaned up ./docs'))
    .catch((err) => { throw new Error(err) })
}

/**
 * Copy public files
 */
function copy () {
  const copyOpts = {
    filter: (file) => !file.match(/\.(md|todo)$/)
  }

  return fs.copy('./public/data', './docs/data', copyOpts)
    .then(() => console.log('- Copied data files'))
    .catch((err) => { throw new Error(err) })
}

/**
 * Create games list json file
 */
function createGamesList () {
  return new Promise((resolve, reject) => {
    const dir = './docs/data/games'
    const games = []

    fs.readdir(dir, function (readErr, files) {
      if (readErr) throw new Error(readErr)

      files.forEach((file) => {
        const gameData = fs.readJsonSync(`${dir}/${file}`)
        games.push(gameData.game)
      })

      try {
        fs.writeJsonSync(`${dir}/gameslist.json`, games)
        console.log('- Created games json file')
        resolve()
      } catch (writeErr) {
        reject(writeErr)
      }
    })
  })
}
