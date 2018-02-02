import * as $protobuf from "protobufjs";

/** Properties of a LinearReference. */
export interface ILinearReference {

    /** LinearReference startDistance */
    startDistance?: (number|Long|null);

    /** LinearReference endDistance */
    endDistance?: (number|Long|null);
}

/** Represents a LinearReference. */
export class LinearReference implements ILinearReference {

    /**
     * Constructs a new LinearReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILinearReference);

    /** LinearReference startDistance. */
    public startDistance: (number|Long);

    /** LinearReference endDistance. */
    public endDistance: (number|Long);

    /** LinearReference endDistancePresent. */
    public endDistancePresent?: "endDistance";

    /**
     * Creates a new LinearReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LinearReference instance
     */
    public static create(properties?: ILinearReference): LinearReference;

    /**
     * Encodes the specified LinearReference message. Does not implicitly {@link LinearReference.verify|verify} messages.
     * @param message LinearReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILinearReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LinearReference message, length delimited. Does not implicitly {@link LinearReference.verify|verify} messages.
     * @param message LinearReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILinearReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LinearReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LinearReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LinearReference;

    /**
     * Decodes a LinearReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LinearReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LinearReference;

    /**
     * Verifies a LinearReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LinearReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LinearReference
     */
    public static fromObject(object: { [k: string]: any }): LinearReference;

    /**
     * Creates a plain object from a LinearReference message. Also converts values to other types if specified.
     * @param message LinearReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LinearReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LinearReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SharedStreetsLinearReferences. */
export interface ISharedStreetsLinearReferences {

    /** SharedStreetsLinearReferences referenceId */
    referenceId?: (string|null);

    /** SharedStreetsLinearReferences referenceLength */
    referenceLength?: (number|Long|null);

    /** SharedStreetsLinearReferences references */
    references?: (ILinearReference[]|null);
}

/** Represents a SharedStreetsLinearReferences. */
export class SharedStreetsLinearReferences implements ISharedStreetsLinearReferences {

    /**
     * Constructs a new SharedStreetsLinearReferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISharedStreetsLinearReferences);

    /** SharedStreetsLinearReferences referenceId. */
    public referenceId: string;

    /** SharedStreetsLinearReferences referenceLength. */
    public referenceLength: (number|Long);

    /** SharedStreetsLinearReferences references. */
    public references: ILinearReference[];

    /**
     * Creates a new SharedStreetsLinearReferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SharedStreetsLinearReferences instance
     */
    public static create(properties?: ISharedStreetsLinearReferences): SharedStreetsLinearReferences;

    /**
     * Encodes the specified SharedStreetsLinearReferences message. Does not implicitly {@link SharedStreetsLinearReferences.verify|verify} messages.
     * @param message SharedStreetsLinearReferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISharedStreetsLinearReferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SharedStreetsLinearReferences message, length delimited. Does not implicitly {@link SharedStreetsLinearReferences.verify|verify} messages.
     * @param message SharedStreetsLinearReferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISharedStreetsLinearReferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SharedStreetsLinearReferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SharedStreetsLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SharedStreetsLinearReferences;

    /**
     * Decodes a SharedStreetsLinearReferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SharedStreetsLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SharedStreetsLinearReferences;

    /**
     * Verifies a SharedStreetsLinearReferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SharedStreetsLinearReferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SharedStreetsLinearReferences
     */
    public static fromObject(object: { [k: string]: any }): SharedStreetsLinearReferences;

    /**
     * Creates a plain object from a SharedStreetsLinearReferences message. Also converts values to other types if specified.
     * @param message SharedStreetsLinearReferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SharedStreetsLinearReferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SharedStreetsLinearReferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SharedStreetsBinnedLinearReferences. */
export interface ISharedStreetsBinnedLinearReferences {

    /** SharedStreetsBinnedLinearReferences referenceId */
    referenceId?: (string|null);

    /** SharedStreetsBinnedLinearReferences referenceLength */
    referenceLength?: (number|Long|null);

    /** SharedStreetsBinnedLinearReferences numberOfBins */
    numberOfBins?: (number|null);

    /** SharedStreetsBinnedLinearReferences binPosition */
    binPosition?: (number[]|null);

    /** SharedStreetsBinnedLinearReferences binValue */
    binValue?: (number[]|null);
}

/** Represents a SharedStreetsBinnedLinearReferences. */
export class SharedStreetsBinnedLinearReferences implements ISharedStreetsBinnedLinearReferences {

    /**
     * Constructs a new SharedStreetsBinnedLinearReferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISharedStreetsBinnedLinearReferences);

    /** SharedStreetsBinnedLinearReferences referenceId. */
    public referenceId: string;

    /** SharedStreetsBinnedLinearReferences referenceLength. */
    public referenceLength: (number|Long);

    /** SharedStreetsBinnedLinearReferences numberOfBins. */
    public numberOfBins: number;

    /** SharedStreetsBinnedLinearReferences binPosition. */
    public binPosition: number[];

    /** SharedStreetsBinnedLinearReferences binValue. */
    public binValue: number[];

    /**
     * Creates a new SharedStreetsBinnedLinearReferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SharedStreetsBinnedLinearReferences instance
     */
    public static create(properties?: ISharedStreetsBinnedLinearReferences): SharedStreetsBinnedLinearReferences;

    /**
     * Encodes the specified SharedStreetsBinnedLinearReferences message. Does not implicitly {@link SharedStreetsBinnedLinearReferences.verify|verify} messages.
     * @param message SharedStreetsBinnedLinearReferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISharedStreetsBinnedLinearReferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SharedStreetsBinnedLinearReferences message, length delimited. Does not implicitly {@link SharedStreetsBinnedLinearReferences.verify|verify} messages.
     * @param message SharedStreetsBinnedLinearReferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISharedStreetsBinnedLinearReferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SharedStreetsBinnedLinearReferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SharedStreetsBinnedLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SharedStreetsBinnedLinearReferences;

    /**
     * Decodes a SharedStreetsBinnedLinearReferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SharedStreetsBinnedLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SharedStreetsBinnedLinearReferences;

    /**
     * Verifies a SharedStreetsBinnedLinearReferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SharedStreetsBinnedLinearReferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SharedStreetsBinnedLinearReferences
     */
    public static fromObject(object: { [k: string]: any }): SharedStreetsBinnedLinearReferences;

    /**
     * Creates a plain object from a SharedStreetsBinnedLinearReferences message. Also converts values to other types if specified.
     * @param message SharedStreetsBinnedLinearReferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SharedStreetsBinnedLinearReferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SharedStreetsBinnedLinearReferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
