// import { lineString, point, featureCollection } from '@turf/helpers'
import { BufferReader } from 'protobufjs/light'
import {
  SharedStreetsGeometry,
  ISharedStreetsGeometry as GeometryPbf,
  SharedStreetsIntersection,
  ISharedStreetsIntersection as IntersectionPbf,
} from './proto/sharedstreets'

/**
 * Geometry Pbf
 *
 * Parser for SharedStreets Geometry Pbf Buffers
 *
 * @param {Buffer} buffer Pbf Buffer
 * @returns {FeatureCollection<LineString>} FeatureCollection of SharedStreets Geometries
 * @example
 * var buffer = fs.readFileSync('z-x-y.geometry.pbf')
 *
 * var collection = sharedstreetsPbf.geometry(buffer)
 * collection.features[0].id // => 'NxPFkg4CrzHeFhwV7Uiq7K'
 */
export function geometry (buffer: Buffer | Uint8Array) {
  const results: GeometryPbf[] = []
  const reader = new BufferReader(buffer)
  while (reader.pos < reader.len) {
    const result: any = SharedStreetsGeometry.decodeDelimited(reader).toJSON()
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
 * @returns {FeatureCollection<Point>} FeatureCollection of SharedStreets Intersections
 * @example
 * var buffer = fs.readFileSync('z-x-y.intersection.pbf')
 *
 * var collection = sharedstreetsPbf.intersection(buffer)
 * collection.features[0].id // => 'NxPFkg4CrzHeFhwV7Uiq7K'
 */
export function intersection (buffer: Buffer | Uint8Array) {
  const results: IntersectionPbf[] = []
  const reader = new BufferReader(buffer)
  while (reader.pos < reader.len) {
    const result: any = SharedStreetsIntersection.decodeDelimited(reader).toJSON()
    results.push(result)
  }
  return results
}

export function latlonsToCoords (latlons: number[]) {
  const coords: Array<[number, number]> = []
  latlons.reduce((lat, deg, index) => {
    if (index % 2 === 0) return deg // Latitude
    coords.push([deg, lat])
  })
  return coords
}
