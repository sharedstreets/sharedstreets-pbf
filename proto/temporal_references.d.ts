import * as $protobuf from "protobufjs";

/** PeriodSize enum. */
export enum PeriodSize {
    OneSecond = 0,
    FiveSeconds = 1,
    TenSeconds = 2,
    FifteenSeconds = 3,
    ThirtySeconds = 4,
    OneMinute = 5,
    FiveMinutes = 6,
    TenMinutes = 7,
    FifteenMinutes = 8,
    ThirtyMinutes = 9,
    OneHour = 10,
    OneDay = 11,
    OneWeek = 12,
    OneMonth = 13,
    OneYear = 14
}

/** Properties of a TemporalPeriod. */
export interface ITemporalPeriod {

    /** TemporalPeriod periodSize */
    periodSize?: (PeriodSize|null);

    /** TemporalPeriod periodOffset */
    periodOffset?: (number|Long|null);
}

/** Represents a TemporalPeriod. */
export class TemporalPeriod implements ITemporalPeriod {

    /**
     * Constructs a new TemporalPeriod.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemporalPeriod);

    /** TemporalPeriod periodSize. */
    public periodSize: PeriodSize;

    /** TemporalPeriod periodOffset. */
    public periodOffset: (number|Long);

    /**
     * Creates a new TemporalPeriod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TemporalPeriod instance
     */
    public static create(properties?: ITemporalPeriod): TemporalPeriod;

    /**
     * Encodes the specified TemporalPeriod message. Does not implicitly {@link TemporalPeriod.verify|verify} messages.
     * @param message TemporalPeriod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITemporalPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TemporalPeriod message, length delimited. Does not implicitly {@link TemporalPeriod.verify|verify} messages.
     * @param message TemporalPeriod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITemporalPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TemporalPeriod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TemporalPeriod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TemporalPeriod;

    /**
     * Decodes a TemporalPeriod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TemporalPeriod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TemporalPeriod;

    /**
     * Verifies a TemporalPeriod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TemporalPeriod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TemporalPeriod
     */
    public static fromObject(object: { [k: string]: any }): TemporalPeriod;

    /**
     * Creates a plain object from a TemporalPeriod message. Also converts values to other types if specified.
     * @param message TemporalPeriod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TemporalPeriod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TemporalPeriod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WeeklyCycle. */
export interface IWeeklyCycle {

    /** WeeklyCycle year */
    year?: (number|null);

    /** WeeklyCycle month */
    month?: (number|null);

    /** WeeklyCycle day */
    day?: (number|null);

    /** WeeklyCycle periodSize */
    periodSize?: (PeriodSize|null);
}

/** Represents a WeeklyCycle. */
export class WeeklyCycle implements IWeeklyCycle {

    /**
     * Constructs a new WeeklyCycle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeeklyCycle);

    /** WeeklyCycle year. */
    public year: number;

    /** WeeklyCycle month. */
    public month: number;

    /** WeeklyCycle day. */
    public day: number;

    /** WeeklyCycle periodSize. */
    public periodSize: PeriodSize;

    /**
     * Creates a new WeeklyCycle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WeeklyCycle instance
     */
    public static create(properties?: IWeeklyCycle): WeeklyCycle;

    /**
     * Encodes the specified WeeklyCycle message. Does not implicitly {@link WeeklyCycle.verify|verify} messages.
     * @param message WeeklyCycle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeeklyCycle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WeeklyCycle message, length delimited. Does not implicitly {@link WeeklyCycle.verify|verify} messages.
     * @param message WeeklyCycle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeeklyCycle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WeeklyCycle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WeeklyCycle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WeeklyCycle;

    /**
     * Decodes a WeeklyCycle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WeeklyCycle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WeeklyCycle;

    /**
     * Verifies a WeeklyCycle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WeeklyCycle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WeeklyCycle
     */
    public static fromObject(object: { [k: string]: any }): WeeklyCycle;

    /**
     * Creates a plain object from a WeeklyCycle message. Also converts values to other types if specified.
     * @param message WeeklyCycle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WeeklyCycle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WeeklyCycle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
