// import { lineString, point, featureCollection } from '@turf/helpers'
import { BufferReader } from 'protobufjs/light'
import {
  SharedStreetsGeometry,
  ISharedStreetsGeometry as SharedStreetsGeometryPbf,
  SharedStreetsIntersection,
  ISharedStreetsIntersection as SharedStreetsIntersectionPbf,
  SharedStreetsReference,
  ISharedStreetsReference as SharedStreetsReferencePbf,
  SharedStreetsMetadata,
  ISharedStreetsMetadata as SharedStreetsMetadataPbf,
} from './proto/sharedstreets'

export {
  SharedStreetsGeometryPbf,
  SharedStreetsIntersectionPbf,
  SharedStreetsReferencePbf,
  SharedStreetsMetadataPbf,
}

/**
 * Geometry Pbf
 *
 * Parser for SharedStreets Geometry Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {Array<SharedStreetsGeometryPbf>} An Array of SharedStreet Geometry
 * @example
 * const buffer = fs.readFileSync('z-x-y.geometry.pbf')
 *
 * const geoms = sharedstreetsPbf.geometry(buffer)
 * geoms[0].id // => 'NxPFkg4CrzHeFhwV7Uiq7K'
 */
export function geometry (buffer: Buffer | Uint8Array): SharedStreetsGeometryPbf[] {
  const results = []
  const reader = new BufferReader(buffer)
  while (reader.pos < reader.len) {
    const result: SharedStreetsGeometryPbf = SharedStreetsGeometry.decodeDelimited(reader).toJSON()
    results.push(result)
  }
  return results
}

/**
 * Intersection Pbf
 *
 * Parser for SharedStreets Intersection Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {Array<SharedStreetsIntersectionPbf>} An Array of SharedStreet Intersections
 * @example
 * const buffer = fs.readFileSync('z-x-y.intersection.pbf')
 *
 * const intersections = sharedstreetsPbf.intersection(buffer)
 * intersections[0].id // => 'NxPFkg4CrzHeFhwV7Uiq7K'
 */
export function intersection (buffer: Buffer | Uint8Array): SharedStreetsIntersectionPbf[] {
  const results = []
  const reader = new BufferReader(buffer)
  while (reader.pos < reader.len) {
    const result: SharedStreetsIntersectionPbf = SharedStreetsIntersection.decodeDelimited(reader).toJSON()
    results.push(result)
  }
  return results
}
