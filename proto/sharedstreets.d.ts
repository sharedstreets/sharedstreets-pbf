import * as $protobuf from "protobufjs";

/** Properties of a Delimiter. */
export interface IDelimiter {

    /** Delimiter length */
    length?: (number|null);
}

/** Represents a Delimiter. */
export class Delimiter implements IDelimiter {

    /**
     * Constructs a new Delimiter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDelimiter);

    /** Delimiter length. */
    public length: number;

    /**
     * Creates a new Delimiter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Delimiter instance
     */
    public static create(properties?: IDelimiter): Delimiter;

    /**
     * Encodes the specified Delimiter message. Does not implicitly {@link Delimiter.verify|verify} messages.
     * @param message Delimiter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDelimiter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Delimiter message, length delimited. Does not implicitly {@link Delimiter.verify|verify} messages.
     * @param message Delimiter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDelimiter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Delimiter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Delimiter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Delimiter;

    /**
     * Decodes a Delimiter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Delimiter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Delimiter;

    /**
     * Verifies a Delimiter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Delimiter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Delimiter
     */
    public static fromObject(object: { [k: string]: any }): Delimiter;

    /**
     * Creates a plain object from a Delimiter message. Also converts values to other types if specified.
     * @param message Delimiter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Delimiter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Delimiter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GISSectionMetadata. */
export interface IGISSectionMetadata {

    /** GISSectionMetadata sectionId */
    sectionId?: (string|null);

    /** GISSectionMetadata sectionProperties */
    sectionProperties?: (string|null);
}

/** Represents a GISSectionMetadata. */
export class GISSectionMetadata implements IGISSectionMetadata {

    /**
     * Constructs a new GISSectionMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGISSectionMetadata);

    /** GISSectionMetadata sectionId. */
    public sectionId: string;

    /** GISSectionMetadata sectionProperties. */
    public sectionProperties: string;

    /**
     * Creates a new GISSectionMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GISSectionMetadata instance
     */
    public static create(properties?: IGISSectionMetadata): GISSectionMetadata;

    /**
     * Encodes the specified GISSectionMetadata message. Does not implicitly {@link GISSectionMetadata.verify|verify} messages.
     * @param message GISSectionMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGISSectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GISSectionMetadata message, length delimited. Does not implicitly {@link GISSectionMetadata.verify|verify} messages.
     * @param message GISSectionMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGISSectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GISSectionMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GISSectionMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GISSectionMetadata;

    /**
     * Decodes a GISSectionMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GISSectionMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GISSectionMetadata;

    /**
     * Verifies a GISSectionMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GISSectionMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GISSectionMetadata
     */
    public static fromObject(object: { [k: string]: any }): GISSectionMetadata;

    /**
     * Creates a plain object from a GISSectionMetadata message. Also converts values to other types if specified.
     * @param message GISSectionMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GISSectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GISSectionMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GISMetadata. */
export interface IGISMetadata {

    /** GISMetadata source */
    source?: (string|null);

    /** GISMetadata sections */
    sections?: (IGISSectionMetadata[]|null);
}

/** Represents a GISMetadata. */
export class GISMetadata implements IGISMetadata {

    /**
     * Constructs a new GISMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGISMetadata);

    /** GISMetadata source. */
    public source: string;

    /** GISMetadata sections. */
    public sections: IGISSectionMetadata[];

    /**
     * Creates a new GISMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GISMetadata instance
     */
    public static create(properties?: IGISMetadata): GISMetadata;

    /**
     * Encodes the specified GISMetadata message. Does not implicitly {@link GISMetadata.verify|verify} messages.
     * @param message GISMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGISMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GISMetadata message, length delimited. Does not implicitly {@link GISMetadata.verify|verify} messages.
     * @param message GISMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGISMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GISMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GISMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GISMetadata;

    /**
     * Decodes a GISMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GISMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GISMetadata;

    /**
     * Verifies a GISMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GISMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GISMetadata
     */
    public static fromObject(object: { [k: string]: any }): GISMetadata;

    /**
     * Creates a plain object from a GISMetadata message. Also converts values to other types if specified.
     * @param message GISMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GISMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GISMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** RoadClass enum. */
export enum RoadClass {
    Motorway = 0,
    Trunk = 1,
    Primary = 2,
    Secondary = 3,
    Tertiary = 4,
    Residential = 5,
    Unclassified = 6,
    Service = 7,
    Other = 8
}

/** Properties of a WaySection. */
export interface IWaySection {

    /** WaySection wayId */
    wayId?: (number|Long|null);

    /** WaySection roadClass */
    roadClass?: (RoadClass|null);

    /** WaySection oneWay */
    oneWay?: (boolean|null);

    /** WaySection roundabout */
    roundabout?: (boolean|null);

    /** WaySection link */
    link?: (boolean|null);

    /** WaySection nodeIds */
    nodeIds?: ((number|Long)[]|null);
}

/** Represents a WaySection. */
export class WaySection implements IWaySection {

    /**
     * Constructs a new WaySection.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWaySection);

    /** WaySection wayId. */
    public wayId: (number|Long);

    /** WaySection roadClass. */
    public roadClass: RoadClass;

    /** WaySection oneWay. */
    public oneWay: boolean;

    /** WaySection roundabout. */
    public roundabout: boolean;

    /** WaySection link. */
    public link: boolean;

    /** WaySection nodeIds. */
    public nodeIds: (number|Long)[];

    /**
     * Creates a new WaySection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WaySection instance
     */
    public static create(properties?: IWaySection): WaySection;

    /**
     * Encodes the specified WaySection message. Does not implicitly {@link WaySection.verify|verify} messages.
     * @param message WaySection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWaySection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WaySection message, length delimited. Does not implicitly {@link WaySection.verify|verify} messages.
     * @param message WaySection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWaySection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WaySection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WaySection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WaySection;

    /**
     * Decodes a WaySection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WaySection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WaySection;

    /**
     * Verifies a WaySection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WaySection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WaySection
     */
    public static fromObject(object: { [k: string]: any }): WaySection;

    /**
     * Creates a plain object from a WaySection message. Also converts values to other types if specified.
     * @param message WaySection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WaySection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WaySection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a OSMMetadata. */
export interface IOSMMetadata {

    /** OSMMetadata waySections */
    waySections?: (IWaySection[]|null);
}

/** Represents a OSMMetadata. */
export class OSMMetadata implements IOSMMetadata {

    /**
     * Constructs a new OSMMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOSMMetadata);

    /** OSMMetadata waySections. */
    public waySections: IWaySection[];

    /**
     * Creates a new OSMMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OSMMetadata instance
     */
    public static create(properties?: IOSMMetadata): OSMMetadata;

    /**
     * Encodes the specified OSMMetadata message. Does not implicitly {@link OSMMetadata.verify|verify} messages.
     * @param message OSMMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOSMMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OSMMetadata message, length delimited. Does not implicitly {@link OSMMetadata.verify|verify} messages.
     * @param message OSMMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOSMMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a OSMMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OSMMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OSMMetadata;

    /**
     * Decodes a OSMMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OSMMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OSMMetadata;

    /**
     * Verifies a OSMMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a OSMMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OSMMetadata
     */
    public static fromObject(object: { [k: string]: any }): OSMMetadata;

    /**
     * Creates a plain object from a OSMMetadata message. Also converts values to other types if specified.
     * @param message OSMMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OSMMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OSMMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SharedStreetsMetadata. */
export interface ISharedStreetsMetadata {

    /** SharedStreetsMetadata geometryId */
    geometryId?: (string|null);

    /** SharedStreetsMetadata osmMetadata */
    osmMetadata?: (IOSMMetadata|null);

    /** SharedStreetsMetadata gisMetadata */
    gisMetadata?: (IGISMetadata[]|null);
}

/** Represents a SharedStreetsMetadata. */
export class SharedStreetsMetadata implements ISharedStreetsMetadata {

    /**
     * Constructs a new SharedStreetsMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISharedStreetsMetadata);

    /** SharedStreetsMetadata geometryId. */
    public geometryId: string;

    /** SharedStreetsMetadata osmMetadata. */
    public osmMetadata?: (IOSMMetadata|null);

    /** SharedStreetsMetadata gisMetadata. */
    public gisMetadata: IGISMetadata[];

    /**
     * Creates a new SharedStreetsMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SharedStreetsMetadata instance
     */
    public static create(properties?: ISharedStreetsMetadata): SharedStreetsMetadata;

    /**
     * Encodes the specified SharedStreetsMetadata message. Does not implicitly {@link SharedStreetsMetadata.verify|verify} messages.
     * @param message SharedStreetsMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISharedStreetsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SharedStreetsMetadata message, length delimited. Does not implicitly {@link SharedStreetsMetadata.verify|verify} messages.
     * @param message SharedStreetsMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISharedStreetsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SharedStreetsMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SharedStreetsMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SharedStreetsMetadata;

    /**
     * Decodes a SharedStreetsMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SharedStreetsMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SharedStreetsMetadata;

    /**
     * Verifies a SharedStreetsMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SharedStreetsMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SharedStreetsMetadata
     */
    public static fromObject(object: { [k: string]: any }): SharedStreetsMetadata;

    /**
     * Creates a plain object from a SharedStreetsMetadata message. Also converts values to other types if specified.
     * @param message SharedStreetsMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SharedStreetsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SharedStreetsMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SharedStreetsGeometry. */
export interface ISharedStreetsGeometry {

    /** SharedStreetsGeometry id */
    id?: (string|null);

    /** SharedStreetsGeometry fromIntersectionId */
    fromIntersectionId?: (string|null);

    /** SharedStreetsGeometry toIntersectionId */
    toIntersectionId?: (string|null);

    /** SharedStreetsGeometry forwardReferenceId */
    forwardReferenceId?: (string|null);

    /** SharedStreetsGeometry backReferenceId */
    backReferenceId?: (string|null);

    /** SharedStreetsGeometry roadClass */
    roadClass?: (RoadClass|null);

    /** SharedStreetsGeometry lonlats */
    lonlats?: (number[]|null);
}

/** Represents a SharedStreetsGeometry. */
export class SharedStreetsGeometry implements ISharedStreetsGeometry {

    /**
     * Constructs a new SharedStreetsGeometry.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISharedStreetsGeometry);

    /** SharedStreetsGeometry id. */
    public id: string;

    /** SharedStreetsGeometry fromIntersectionId. */
    public fromIntersectionId: string;

    /** SharedStreetsGeometry toIntersectionId. */
    public toIntersectionId: string;

    /** SharedStreetsGeometry forwardReferenceId. */
    public forwardReferenceId: string;

    /** SharedStreetsGeometry backReferenceId. */
    public backReferenceId: string;

    /** SharedStreetsGeometry roadClass. */
    public roadClass: RoadClass;

    /** SharedStreetsGeometry lonlats. */
    public lonlats: number[];

    /**
     * Creates a new SharedStreetsGeometry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SharedStreetsGeometry instance
     */
    public static create(properties?: ISharedStreetsGeometry): SharedStreetsGeometry;

    /**
     * Encodes the specified SharedStreetsGeometry message. Does not implicitly {@link SharedStreetsGeometry.verify|verify} messages.
     * @param message SharedStreetsGeometry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISharedStreetsGeometry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SharedStreetsGeometry message, length delimited. Does not implicitly {@link SharedStreetsGeometry.verify|verify} messages.
     * @param message SharedStreetsGeometry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISharedStreetsGeometry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SharedStreetsGeometry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SharedStreetsGeometry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SharedStreetsGeometry;

    /**
     * Decodes a SharedStreetsGeometry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SharedStreetsGeometry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SharedStreetsGeometry;

    /**
     * Verifies a SharedStreetsGeometry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SharedStreetsGeometry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SharedStreetsGeometry
     */
    public static fromObject(object: { [k: string]: any }): SharedStreetsGeometry;

    /**
     * Creates a plain object from a SharedStreetsGeometry message. Also converts values to other types if specified.
     * @param message SharedStreetsGeometry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SharedStreetsGeometry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SharedStreetsGeometry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LocationReference. */
export interface ILocationReference {

    /** LocationReference intersectionId */
    intersectionId?: (string|null);

    /** LocationReference lon */
    lon?: (number|null);

    /** LocationReference lat */
    lat?: (number|null);

    /** LocationReference inboundBearing */
    inboundBearing?: (number|null);

    /** LocationReference outboundBearing */
    outboundBearing?: (number|null);

    /** LocationReference distanceToNextRef */
    distanceToNextRef?: (number|null);
}

/** Represents a LocationReference. */
export class LocationReference implements ILocationReference {

    /**
     * Constructs a new LocationReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILocationReference);

    /** LocationReference intersectionId. */
    public intersectionId: string;

    /** LocationReference lon. */
    public lon: number;

    /** LocationReference lat. */
    public lat: number;

    /** LocationReference inboundBearing. */
    public inboundBearing: number;

    /** LocationReference outboundBearing. */
    public outboundBearing: number;

    /** LocationReference distanceToNextRef. */
    public distanceToNextRef: number;

    /** LocationReference inboundBearingPresent. */
    public inboundBearingPresent?: "inboundBearing";

    /** LocationReference outboundBearingPresent. */
    public outboundBearingPresent?: "outboundBearing";

    /** LocationReference distanceToNextRefPresent. */
    public distanceToNextRefPresent?: "distanceToNextRef";

    /**
     * Creates a new LocationReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LocationReference instance
     */
    public static create(properties?: ILocationReference): LocationReference;

    /**
     * Encodes the specified LocationReference message. Does not implicitly {@link LocationReference.verify|verify} messages.
     * @param message LocationReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILocationReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LocationReference message, length delimited. Does not implicitly {@link LocationReference.verify|verify} messages.
     * @param message LocationReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILocationReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LocationReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LocationReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LocationReference;

    /**
     * Decodes a LocationReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LocationReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LocationReference;

    /**
     * Verifies a LocationReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LocationReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LocationReference
     */
    public static fromObject(object: { [k: string]: any }): LocationReference;

    /**
     * Creates a plain object from a LocationReference message. Also converts values to other types if specified.
     * @param message LocationReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LocationReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LocationReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SharedStreetsReference. */
export interface ISharedStreetsReference {

    /** SharedStreetsReference id */
    id?: (string|null);

    /** SharedStreetsReference geometryId */
    geometryId?: (string|null);

    /** SharedStreetsReference formOfWay */
    formOfWay?: (SharedStreetsReference.FormOfWay|null);

    /** SharedStreetsReference locationReferences */
    locationReferences?: (ILocationReference[]|null);
}

/** Represents a SharedStreetsReference. */
export class SharedStreetsReference implements ISharedStreetsReference {

    /**
     * Constructs a new SharedStreetsReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISharedStreetsReference);

    /** SharedStreetsReference id. */
    public id: string;

    /** SharedStreetsReference geometryId. */
    public geometryId: string;

    /** SharedStreetsReference formOfWay. */
    public formOfWay: SharedStreetsReference.FormOfWay;

    /** SharedStreetsReference locationReferences. */
    public locationReferences: ILocationReference[];

    /**
     * Creates a new SharedStreetsReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SharedStreetsReference instance
     */
    public static create(properties?: ISharedStreetsReference): SharedStreetsReference;

    /**
     * Encodes the specified SharedStreetsReference message. Does not implicitly {@link SharedStreetsReference.verify|verify} messages.
     * @param message SharedStreetsReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISharedStreetsReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SharedStreetsReference message, length delimited. Does not implicitly {@link SharedStreetsReference.verify|verify} messages.
     * @param message SharedStreetsReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISharedStreetsReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SharedStreetsReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SharedStreetsReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SharedStreetsReference;

    /**
     * Decodes a SharedStreetsReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SharedStreetsReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SharedStreetsReference;

    /**
     * Verifies a SharedStreetsReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SharedStreetsReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SharedStreetsReference
     */
    public static fromObject(object: { [k: string]: any }): SharedStreetsReference;

    /**
     * Creates a plain object from a SharedStreetsReference message. Also converts values to other types if specified.
     * @param message SharedStreetsReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SharedStreetsReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SharedStreetsReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SharedStreetsReference {

    /** FormOfWay enum. */
    enum FormOfWay {
        Undefined = 0,
        Motorway = 1,
        MultipleCarriageway = 2,
        SingleCarriageway = 3,
        Roundabout = 4,
        TrafficSquare = 5,
        SlipRoad = 6,
        Other = 7
    }
}

/** Properties of a SharedStreetsIntersection. */
export interface ISharedStreetsIntersection {

    /** SharedStreetsIntersection id */
    id?: (string|null);

    /** SharedStreetsIntersection nodeId */
    nodeId?: (string|null);

    /** SharedStreetsIntersection lon */
    lon?: (number|null);

    /** SharedStreetsIntersection lat */
    lat?: (number|null);

    /** SharedStreetsIntersection inboundReferenceIds */
    inboundReferenceIds?: (string[]|null);

    /** SharedStreetsIntersection outboundReferenceIds */
    outboundReferenceIds?: (string[]|null);
}

/** Represents a SharedStreetsIntersection. */
export class SharedStreetsIntersection implements ISharedStreetsIntersection {

    /**
     * Constructs a new SharedStreetsIntersection.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISharedStreetsIntersection);

    /** SharedStreetsIntersection id. */
    public id: string;

    /** SharedStreetsIntersection nodeId. */
    public nodeId: string;

    /** SharedStreetsIntersection lon. */
    public lon: number;

    /** SharedStreetsIntersection lat. */
    public lat: number;

    /** SharedStreetsIntersection inboundReferenceIds. */
    public inboundReferenceIds: string[];

    /** SharedStreetsIntersection outboundReferenceIds. */
    public outboundReferenceIds: string[];

    /**
     * Creates a new SharedStreetsIntersection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SharedStreetsIntersection instance
     */
    public static create(properties?: ISharedStreetsIntersection): SharedStreetsIntersection;

    /**
     * Encodes the specified SharedStreetsIntersection message. Does not implicitly {@link SharedStreetsIntersection.verify|verify} messages.
     * @param message SharedStreetsIntersection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISharedStreetsIntersection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SharedStreetsIntersection message, length delimited. Does not implicitly {@link SharedStreetsIntersection.verify|verify} messages.
     * @param message SharedStreetsIntersection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISharedStreetsIntersection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SharedStreetsIntersection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SharedStreetsIntersection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SharedStreetsIntersection;

    /**
     * Decodes a SharedStreetsIntersection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SharedStreetsIntersection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SharedStreetsIntersection;

    /**
     * Verifies a SharedStreetsIntersection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SharedStreetsIntersection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SharedStreetsIntersection
     */
    public static fromObject(object: { [k: string]: any }): SharedStreetsIntersection;

    /**
     * Creates a plain object from a SharedStreetsIntersection message. Also converts values to other types if specified.
     * @param message SharedStreetsIntersection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SharedStreetsIntersection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SharedStreetsIntersection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
