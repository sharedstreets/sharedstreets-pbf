const fs = require('fs')
const path = require('path')
const Benchmark = require('benchmark')
const sharedstreestsPbf = require('./index')

const geometryBuffer = fs.readFileSync(path.join('test', 'in', '11-602-769.geometry.pbf'))
const intersectionBuffer = fs.readFileSync(path.join('test', 'in', '11-602-769.intersection.pbf'))
const metadataBuffer = fs.readFileSync(path.join('test', 'in', '11-602-769.metadata.pbf'))
const referenceBuffer = fs.readFileSync(path.join('test', 'in', '11-602-769.reference.pbf'))

/**
 * Benchmark Results
 *
 * geometry x 1,336 ops/sec ±2.14% (85 runs sampled)
 * intersection x 1,160 ops/sec ±2.98% (83 runs sampled)
 * metadata x 229 ops/sec ±2.10% (82 runs sampled)
 * reference x 974 ops/sec ±1.84% (88 runs sampled)
 */
const suite = new Benchmark.Suite('sharedstreets-pbf')
suite
    .add('geometry', () => sharedstreestsPbf.geometry(geometryBuffer))
    .add('intersection', () => sharedstreestsPbf.intersection(intersectionBuffer))
    .add('metadata', () => sharedstreestsPbf.metadata(metadataBuffer))
    .add('reference', () => sharedstreestsPbf.reference(referenceBuffer))
    .on('cycle', e => console.log(String(e.target)))
    .on('complete', () => {})
    .run()
