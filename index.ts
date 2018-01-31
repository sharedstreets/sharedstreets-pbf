import { Reader, util } from 'protobufjs/minimal'
import * as Proto from './proto/sharedstreets'
import {
  SharedStreetsGeometry,
  SharedStreetsIntersection,
  SharedStreetsReference,
  SharedStreetsMetadata,
} from 'sharedstreets-types'

/**
 * Geometry Pbf
 *
 * Parser for SharedStreets Geometry Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {Array<SharedStreetsGeometry>} An Array of SharedStreet Geometry
 * @example
 * const buffer = fs.readFileSync('z-x-y.geometry.pbf')
 *
 * const geoms = sharedstreetsPbf.geometry(buffer)
 * geoms[0].id // => '81f666c5e1e4de0f7df4fbd793d909b2'
 */
export function geometry (buffer: Buffer | Uint8Array) {
  return readBuffer<SharedStreetsGeometry>(buffer, Proto.SharedStreetsGeometry)
}

/**
 * Intersection Pbf
 *
 * Parser for SharedStreets Intersection Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {Array<SharedStreetsIntersection>} An Array of SharedStreet Intersections
 * @example
 * const buffer = fs.readFileSync('z-x-y.intersection.pbf')
 *
 * const intersections = sharedstreetsPbf.intersection(buffer)
 * intersections[0].id // => '8037a9444353cd7dd3f58d9a436f2537'
 */
export function intersection (buffer: Buffer | Uint8Array) {
  return readBuffer<SharedStreetsIntersection>(buffer, Proto.SharedStreetsIntersection)
}

/**
 * Reference Pbf
 *
 * Parser for SharedStreets Reference Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {Array<SharedStreetsReferencePbf>} An Array of SharedStreet References
 * @example
 * const buffer = fs.readFileSync('z-x-y.reference.pbf')
 *
 * const references = sharedstreetsPbf.reference(buffer)
 * references[0].id // => '41d73e28819470745fa1f93dc46d82a9'
 */
export function reference (buffer: Buffer | Uint8Array) {
  return readBuffer<SharedStreetsReference>(buffer, Proto.SharedStreetsReference)
}

/**
 * Metadata Pbf
 *
 * Parser for SharedStreets Metadata Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {Array<SharedStreetsMetadata>} An Array of SharedStreet Metadatas
 * @example
 * const buffer = fs.readFileSync('z-x-y.metadata.pbf')
 *
 * const metadatas = sharedstreetsPbf.metadata(buffer)
 * metadatas[0].geometryID // => '81f666c5e1e4de0f7df4fbd793d909b2'
 */
export function metadata (buffer: Buffer | Uint8Array) {
  return readBuffer<SharedStreetsMetadata>(buffer, Proto.SharedStreetsMetadata)
}

/**
 * Decode Delimited using protobufjs
 *
 * @private
 */
function readBuffer<T = any>(buffer: Buffer | Uint8Array, parser: any): T[] {
  const results = []
  const reader = new Reader(buffer)
  while (reader.pos < reader.len) {
    const message = parser.decodeDelimited(reader)
    const options = util.toJSONOptions
    options.defaults = true
    const json = parser.toObject(message, options)
    results.push(json)
  }
  return results
}
