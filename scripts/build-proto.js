#!/usr/bin/env node

const path = require('path')
const glob = require('glob')
const { pbjs, pbts } = require('protobufjs/cli')

glob.sync(path.join(__dirname, '..', 'sharedstreets-ref-system', 'proto', '*.proto')).forEach(filepath => {
  // Filepaths
  const {name, base} = path.parse(filepath)
  const js = path.join(__dirname, '..', 'proto', name + '.js')
  const dts = path.join(__dirname, '..', 'proto', name + '.d.ts')

  // Create ProtobufJS Static Javascript
  pbjs.main(['-t', 'static-module', '-w', 'commonjs', '-o', js, filepath])

  // Create ProtobufJS Typescript Definition
  pbts.main(['-o', dts, js])
})
