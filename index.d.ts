/// <reference types="node" />
import { ISharedStreetsGeometry as GeometryPbf, ISharedStreetsIntersection as IntersectionPbf } from './proto/sharedstreets';
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
export declare function geometry(buffer: Buffer | Uint8Array): GeometryPbf[];
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
export declare function intersection(buffer: Buffer | Uint8Array): IntersectionPbf[];
export declare function latlonsToCoords(latlons: number[]): [number, number][];
