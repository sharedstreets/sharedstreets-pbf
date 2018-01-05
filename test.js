const fs = require('fs')
const path = require('path')
const glob = require('glob')
const write = require('write-json-file')
const load = require('load-json-file')
const Pbf = require('pbf')
const test = require('tape')
const sharedstreetsPbf = require('./index')

test('read Mapbox Vector Tile', t => {
  const buffer = fs.readFileSync(path.join(__dirname, 'test', 'in', '12-1143-1497.vector.pbf'))
  new Pbf(buffer).readFields((tag, data, pbf) => {})
  t.end()
})

test('parsing issue using Mapbox pbf #1', t => {
  // const buffer = fs.readFileSync(path.join(__dirname, 'test', 'in', '11-602-769.geometry.pbf'))
  // new Pbf(buffer).readFields((tag, data, pbf) => {})
  // Error => Unimplemented type: 4
  t.skip('https://github.com/sharedstreets/sharedstreets-js-pbf/issues/1')
  t.end()
})

test('sharedstreets-pbf -- geometry', t => {
  glob.sync(path.join(__dirname, 'test', 'in', '*.geometry.pbf')).forEach(filepath => {
    const {name, base} = path.parse(filepath)
    const buffer = fs.readFileSync(filepath)
    const result = sharedstreetsPbf.geometry(buffer)

    const outfile = filepath.replace(path.join('test', 'in', base), path.join('test', 'out', name + '.json'))
    if (process.env.REGEN) write.sync(outfile, result)
    t.deepEqual(result, load.sync(outfile), name)
  })
  t.end()
})

test('sharedstreets-pbf -- intersection', t => {
  glob.sync(path.join(__dirname, 'test', 'in', '*.intersection.pbf')).forEach(filepath => {
    const {name, base} = path.parse(filepath)
    const buffer = fs.readFileSync(filepath)
    const result = sharedstreetsPbf.intersection(buffer)

    const outfile = filepath.replace(path.join('test', 'in', base), path.join('test', 'out', name + '.json'))
    if (process.env.REGEN) write.sync(outfile, result)
    t.deepEqual(result, load.sync(outfile), name)
  })
  t.end()
})

test('sharedstreets-pbf -- geometry.latlonsToCoords', t => {
  const latlons = [40, -74, 50, -80]
  t.deepEqual(sharedstreetsPbf.latlonsToCoords(latlons), [[-74, 40], [-80, 50]])
  t.end()
})
