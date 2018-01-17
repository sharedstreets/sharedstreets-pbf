const fs = require('fs')
const path = require('path')
const glob = require('glob')
const write = require('write-json-file')
const load = require('load-json-file')
const test = require('tape')
const sharedstreetsPbf = require('./index')

const types = ['geometry', 'intersection', 'reference', 'metadata']
types.forEach(type => {
  test('sharedstreets-pbf -- ' + type, t => {
    glob.sync(path.join(__dirname, 'test', 'in', `*.${type}.pbf`)).forEach(filepath => {
      const {name, base} = path.parse(filepath)
      const buffer = fs.readFileSync(filepath)
      const result = sharedstreetsPbf[type](buffer)

      const outfile = filepath.replace(path.join('test', 'in', base), path.join('test', 'out', name + '.json'))
      if (process.env.REGEN) write.sync(outfile, result)
      t.deepEqual(result, load.sync(outfile), name)
    })
    t.end()
  })
})
