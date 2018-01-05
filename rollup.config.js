import uglify from 'rollup-plugin-uglify'
import node from 'rollup-plugin-node-resolve'

const input = 'index.mjs'
const name = 'sharedstreetsPbf'
const sourcemap = true

export default [{
  input,
  output: {
    file: 'dist/sharedstreets-pbf.mjs',
    format: 'es',
    sourcemap
  },
  plugins: [node()]
}, {
  input,
  output: {
    file: 'dist/sharedstreets-pbf.js',
    format: 'umd',
    name,
    sourcemap
  },
  plugins: [node()]
},
{
  input,
  output: {
    file: 'dist/sharedstreets-pbf.min.js',
    format: 'umd',
    name,
    sourcemap
  },
  plugins: [node(), uglify()]
}]
