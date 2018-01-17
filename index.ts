import { BufferReader } from 'protobufjs/minimal'
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
 * geoms[0].id // => 'NxPFkg4CrzHeFhwV7Uiq7K'
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
 * intersections[0].id // => 'NxPFkg4CrzHeFhwV7Uiq7K'
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
 * references[0].id // => 'Bg1tCb7pjpb9Z8RZVGqBtK'
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
 * metadatas[0].geometryID // => 'HGdvAjtekfDrLFzPevNtf3'
 */
export function metadata (buffer: Buffer | Uint8Array) {
  return readBuffer<SharedStreetsMetadata>(buffer, Proto.SharedStreetsMetadata)
}

function readBuffer<T = any>(buffer: Buffer | Uint8Array, parser: any): T[] {
  const results = []
  const reader = new BufferReader(buffer)
  while (reader.pos < reader.len) {
    const result: any = parser.decodeDelimited(reader).toJSON()
    results.push(result)
  }
  return results
}
