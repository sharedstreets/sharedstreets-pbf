/// <reference types="node" />
import { ISharedStreetsGeometry as SharedStreetsGeometryPbf, ISharedStreetsIntersection as SharedStreetsIntersectionPbf } from './proto/sharedstreets';
export { SharedStreetsGeometryPbf, SharedStreetsIntersectionPbf };
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
export declare function geometry(buffer: Buffer | Uint8Array): SharedStreetsGeometryPbf[];
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
export declare function intersection(buffer: Buffer | Uint8Array): SharedStreetsIntersectionPbf[];
export declare function latlonsToCoords(latlons: number[]): [number, number][];
