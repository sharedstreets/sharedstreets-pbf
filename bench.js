const fs = require('fs')
const path = require('path')
const Benchmark = require('benchmark')
const sharedstreestsPbf = require('./index')

const geometryBuffer = fs.readFileSync(path.join('test', 'in', '11-602-769.geometry.pbf'))
const intersectionBuffer = fs.readFileSync(path.join('test', 'in', '11-602-769.intersection.pbf'))

/**
 * Benchmark Results
 *
 * geometry x 1,486 ops/sec ±1.48% (90 runs sampled)
 * intersection x 1,188 ops/sec ±6.95% (78 runs sampled)
 */
const suite = new Benchmark.Suite('sharedstreets-pbf')
suite
    .add('geometry', () => sharedstreestsPbf.geometry(geometryBuffer))
    .add('intersection', () => sharedstreestsPbf.intersection(intersectionBuffer))
    .on('cycle', e => console.log(String(e.target)))
    .on('complete', () => {})
    .run()
