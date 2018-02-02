/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * PeriodSize enum.
 * @exports PeriodSize
 * @enum {string}
 * @property {number} OneSecond=0 OneSecond value
 * @property {number} FiveSeconds=1 FiveSeconds value
 * @property {number} TenSeconds=2 TenSeconds value
 * @property {number} FifteenSeconds=3 FifteenSeconds value
 * @property {number} ThirtySeconds=4 ThirtySeconds value
 * @property {number} OneMinute=5 OneMinute value
 * @property {number} FiveMinutes=6 FiveMinutes value
 * @property {number} TenMinutes=7 TenMinutes value
 * @property {number} FifteenMinutes=8 FifteenMinutes value
 * @property {number} ThirtyMinutes=9 ThirtyMinutes value
 * @property {number} OneHour=10 OneHour value
 * @property {number} OneDay=11 OneDay value
 * @property {number} OneWeek=12 OneWeek value
 * @property {number} OneMonth=13 OneMonth value
 * @property {number} OneYear=14 OneYear value
 */
$root.PeriodSize = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "OneSecond"] = 0;
    values[valuesById[1] = "FiveSeconds"] = 1;
    values[valuesById[2] = "TenSeconds"] = 2;
    values[valuesById[3] = "FifteenSeconds"] = 3;
    values[valuesById[4] = "ThirtySeconds"] = 4;
    values[valuesById[5] = "OneMinute"] = 5;
    values[valuesById[6] = "FiveMinutes"] = 6;
    values[valuesById[7] = "TenMinutes"] = 7;
    values[valuesById[8] = "FifteenMinutes"] = 8;
    values[valuesById[9] = "ThirtyMinutes"] = 9;
    values[valuesById[10] = "OneHour"] = 10;
    values[valuesById[11] = "OneDay"] = 11;
    values[valuesById[12] = "OneWeek"] = 12;
    values[valuesById[13] = "OneMonth"] = 13;
    values[valuesById[14] = "OneYear"] = 14;
    return values;
})();

$root.TemporalPeriod = (function() {

    /**
     * Properties of a TemporalPeriod.
     * @exports ITemporalPeriod
     * @interface ITemporalPeriod
     * @property {PeriodSize|null} [periodSize] TemporalPeriod periodSize
     * @property {number|Long|null} [periodOffset] TemporalPeriod periodOffset
     */

    /**
     * Constructs a new TemporalPeriod.
     * @exports TemporalPeriod
     * @classdesc Represents a TemporalPeriod.
     * @implements ITemporalPeriod
     * @constructor
     * @param {ITemporalPeriod=} [properties] Properties to set
     */
    function TemporalPeriod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TemporalPeriod periodSize.
     * @member {PeriodSize} periodSize
     * @memberof TemporalPeriod
     * @instance
     */
    TemporalPeriod.prototype.periodSize = 0;

    /**
     * TemporalPeriod periodOffset.
     * @member {number|Long} periodOffset
     * @memberof TemporalPeriod
     * @instance
     */
    TemporalPeriod.prototype.periodOffset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new TemporalPeriod instance using the specified properties.
     * @function create
     * @memberof TemporalPeriod
     * @static
     * @param {ITemporalPeriod=} [properties] Properties to set
     * @returns {TemporalPeriod} TemporalPeriod instance
     */
    TemporalPeriod.create = function create(properties) {
        return new TemporalPeriod(properties);
    };

    /**
     * Encodes the specified TemporalPeriod message. Does not implicitly {@link TemporalPeriod.verify|verify} messages.
     * @function encode
     * @memberof TemporalPeriod
     * @static
     * @param {ITemporalPeriod} message TemporalPeriod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemporalPeriod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.periodSize);
        if (message.periodOffset != null && message.hasOwnProperty("periodOffset"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.periodOffset);
        return writer;
    };

    /**
     * Encodes the specified TemporalPeriod message, length delimited. Does not implicitly {@link TemporalPeriod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TemporalPeriod
     * @static
     * @param {ITemporalPeriod} message TemporalPeriod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemporalPeriod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TemporalPeriod message from the specified reader or buffer.
     * @function decode
     * @memberof TemporalPeriod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TemporalPeriod} TemporalPeriod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemporalPeriod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TemporalPeriod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.periodSize = reader.int32();
                break;
            case 2:
                message.periodOffset = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TemporalPeriod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TemporalPeriod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TemporalPeriod} TemporalPeriod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemporalPeriod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TemporalPeriod message.
     * @function verify
     * @memberof TemporalPeriod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TemporalPeriod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            switch (message.periodSize) {
            default:
                return "periodSize: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
        if (message.periodOffset != null && message.hasOwnProperty("periodOffset"))
            if (!$util.isInteger(message.periodOffset) && !(message.periodOffset && $util.isInteger(message.periodOffset.low) && $util.isInteger(message.periodOffset.high)))
                return "periodOffset: integer|Long expected";
        return null;
    };

    /**
     * Creates a TemporalPeriod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TemporalPeriod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TemporalPeriod} TemporalPeriod
     */
    TemporalPeriod.fromObject = function fromObject(object) {
        if (object instanceof $root.TemporalPeriod)
            return object;
        var message = new $root.TemporalPeriod();
        switch (object.periodSize) {
        case "OneSecond":
        case 0:
            message.periodSize = 0;
            break;
        case "FiveSeconds":
        case 1:
            message.periodSize = 1;
            break;
        case "TenSeconds":
        case 2:
            message.periodSize = 2;
            break;
        case "FifteenSeconds":
        case 3:
            message.periodSize = 3;
            break;
        case "ThirtySeconds":
        case 4:
            message.periodSize = 4;
            break;
        case "OneMinute":
        case 5:
            message.periodSize = 5;
            break;
        case "FiveMinutes":
        case 6:
            message.periodSize = 6;
            break;
        case "TenMinutes":
        case 7:
            message.periodSize = 7;
            break;
        case "FifteenMinutes":
        case 8:
            message.periodSize = 8;
            break;
        case "ThirtyMinutes":
        case 9:
            message.periodSize = 9;
            break;
        case "OneHour":
        case 10:
            message.periodSize = 10;
            break;
        case "OneDay":
        case 11:
            message.periodSize = 11;
            break;
        case "OneWeek":
        case 12:
            message.periodSize = 12;
            break;
        case "OneMonth":
        case 13:
            message.periodSize = 13;
            break;
        case "OneYear":
        case 14:
            message.periodSize = 14;
            break;
        }
        if (object.periodOffset != null)
            if ($util.Long)
                (message.periodOffset = $util.Long.fromValue(object.periodOffset)).unsigned = true;
            else if (typeof object.periodOffset === "string")
                message.periodOffset = parseInt(object.periodOffset, 10);
            else if (typeof object.periodOffset === "number")
                message.periodOffset = object.periodOffset;
            else if (typeof object.periodOffset === "object")
                message.periodOffset = new $util.LongBits(object.periodOffset.low >>> 0, object.periodOffset.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a TemporalPeriod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TemporalPeriod
     * @static
     * @param {TemporalPeriod} message TemporalPeriod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TemporalPeriod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.periodSize = options.enums === String ? "OneSecond" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.periodOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.periodOffset = options.longs === String ? "0" : 0;
        }
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            object.periodSize = options.enums === String ? $root.PeriodSize[message.periodSize] : message.periodSize;
        if (message.periodOffset != null && message.hasOwnProperty("periodOffset"))
            if (typeof message.periodOffset === "number")
                object.periodOffset = options.longs === String ? String(message.periodOffset) : message.periodOffset;
            else
                object.periodOffset = options.longs === String ? $util.Long.prototype.toString.call(message.periodOffset) : options.longs === Number ? new $util.LongBits(message.periodOffset.low >>> 0, message.periodOffset.high >>> 0).toNumber(true) : message.periodOffset;
        return object;
    };

    /**
     * Converts this TemporalPeriod to JSON.
     * @function toJSON
     * @memberof TemporalPeriod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TemporalPeriod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TemporalPeriod;
})();

$root.WeeklyCycle = (function() {

    /**
     * Properties of a WeeklyCycle.
     * @exports IWeeklyCycle
     * @interface IWeeklyCycle
     * @property {number|null} [year] WeeklyCycle year
     * @property {number|null} [month] WeeklyCycle month
     * @property {number|null} [day] WeeklyCycle day
     * @property {PeriodSize|null} [periodSize] WeeklyCycle periodSize
     */

    /**
     * Constructs a new WeeklyCycle.
     * @exports WeeklyCycle
     * @classdesc Represents a WeeklyCycle.
     * @implements IWeeklyCycle
     * @constructor
     * @param {IWeeklyCycle=} [properties] Properties to set
     */
    function WeeklyCycle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WeeklyCycle year.
     * @member {number} year
     * @memberof WeeklyCycle
     * @instance
     */
    WeeklyCycle.prototype.year = 0;

    /**
     * WeeklyCycle month.
     * @member {number} month
     * @memberof WeeklyCycle
     * @instance
     */
    WeeklyCycle.prototype.month = 0;

    /**
     * WeeklyCycle day.
     * @member {number} day
     * @memberof WeeklyCycle
     * @instance
     */
    WeeklyCycle.prototype.day = 0;

    /**
     * WeeklyCycle periodSize.
     * @member {PeriodSize} periodSize
     * @memberof WeeklyCycle
     * @instance
     */
    WeeklyCycle.prototype.periodSize = 0;

    /**
     * Creates a new WeeklyCycle instance using the specified properties.
     * @function create
     * @memberof WeeklyCycle
     * @static
     * @param {IWeeklyCycle=} [properties] Properties to set
     * @returns {WeeklyCycle} WeeklyCycle instance
     */
    WeeklyCycle.create = function create(properties) {
        return new WeeklyCycle(properties);
    };

    /**
     * Encodes the specified WeeklyCycle message. Does not implicitly {@link WeeklyCycle.verify|verify} messages.
     * @function encode
     * @memberof WeeklyCycle
     * @static
     * @param {IWeeklyCycle} message WeeklyCycle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WeeklyCycle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.year != null && message.hasOwnProperty("year"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.year);
        if (message.month != null && message.hasOwnProperty("month"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.month);
        if (message.day != null && message.hasOwnProperty("day"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.day);
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.periodSize);
        return writer;
    };

    /**
     * Encodes the specified WeeklyCycle message, length delimited. Does not implicitly {@link WeeklyCycle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WeeklyCycle
     * @static
     * @param {IWeeklyCycle} message WeeklyCycle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WeeklyCycle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WeeklyCycle message from the specified reader or buffer.
     * @function decode
     * @memberof WeeklyCycle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WeeklyCycle} WeeklyCycle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WeeklyCycle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WeeklyCycle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.year = reader.uint32();
                break;
            case 2:
                message.month = reader.uint32();
                break;
            case 3:
                message.day = reader.uint32();
                break;
            case 4:
                message.periodSize = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WeeklyCycle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WeeklyCycle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WeeklyCycle} WeeklyCycle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WeeklyCycle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WeeklyCycle message.
     * @function verify
     * @memberof WeeklyCycle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WeeklyCycle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.year != null && message.hasOwnProperty("year"))
            if (!$util.isInteger(message.year))
                return "year: integer expected";
        if (message.month != null && message.hasOwnProperty("month"))
            if (!$util.isInteger(message.month))
                return "month: integer expected";
        if (message.day != null && message.hasOwnProperty("day"))
            if (!$util.isInteger(message.day))
                return "day: integer expected";
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            switch (message.periodSize) {
            default:
                return "periodSize: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
        return null;
    };

    /**
     * Creates a WeeklyCycle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WeeklyCycle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WeeklyCycle} WeeklyCycle
     */
    WeeklyCycle.fromObject = function fromObject(object) {
        if (object instanceof $root.WeeklyCycle)
            return object;
        var message = new $root.WeeklyCycle();
        if (object.year != null)
            message.year = object.year >>> 0;
        if (object.month != null)
            message.month = object.month >>> 0;
        if (object.day != null)
            message.day = object.day >>> 0;
        switch (object.periodSize) {
        case "OneSecond":
        case 0:
            message.periodSize = 0;
            break;
        case "FiveSeconds":
        case 1:
            message.periodSize = 1;
            break;
        case "TenSeconds":
        case 2:
            message.periodSize = 2;
            break;
        case "FifteenSeconds":
        case 3:
            message.periodSize = 3;
            break;
        case "ThirtySeconds":
        case 4:
            message.periodSize = 4;
            break;
        case "OneMinute":
        case 5:
            message.periodSize = 5;
            break;
        case "FiveMinutes":
        case 6:
            message.periodSize = 6;
            break;
        case "TenMinutes":
        case 7:
            message.periodSize = 7;
            break;
        case "FifteenMinutes":
        case 8:
            message.periodSize = 8;
            break;
        case "ThirtyMinutes":
        case 9:
            message.periodSize = 9;
            break;
        case "OneHour":
        case 10:
            message.periodSize = 10;
            break;
        case "OneDay":
        case 11:
            message.periodSize = 11;
            break;
        case "OneWeek":
        case 12:
            message.periodSize = 12;
            break;
        case "OneMonth":
        case 13:
            message.periodSize = 13;
            break;
        case "OneYear":
        case 14:
            message.periodSize = 14;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a WeeklyCycle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WeeklyCycle
     * @static
     * @param {WeeklyCycle} message WeeklyCycle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WeeklyCycle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.year = 0;
            object.month = 0;
            object.day = 0;
            object.periodSize = options.enums === String ? "OneSecond" : 0;
        }
        if (message.year != null && message.hasOwnProperty("year"))
            object.year = message.year;
        if (message.month != null && message.hasOwnProperty("month"))
            object.month = message.month;
        if (message.day != null && message.hasOwnProperty("day"))
            object.day = message.day;
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            object.periodSize = options.enums === String ? $root.PeriodSize[message.periodSize] : message.periodSize;
        return object;
    };

    /**
     * Converts this WeeklyCycle to JSON.
     * @function toJSON
     * @memberof WeeklyCycle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WeeklyCycle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WeeklyCycle;
})();

$root.SpeedHistogram = (function() {

    /**
     * Properties of a SpeedHistogram.
     * @exports ISpeedHistogram
     * @interface ISpeedHistogram
     * @property {Array.<number>|null} [speedBin] SpeedHistogram speedBin
     * @property {Array.<number>|null} [observationCount] SpeedHistogram observationCount
     */

    /**
     * Constructs a new SpeedHistogram.
     * @exports SpeedHistogram
     * @classdesc Represents a SpeedHistogram.
     * @implements ISpeedHistogram
     * @constructor
     * @param {ISpeedHistogram=} [properties] Properties to set
     */
    function SpeedHistogram(properties) {
        this.speedBin = [];
        this.observationCount = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SpeedHistogram speedBin.
     * @member {Array.<number>} speedBin
     * @memberof SpeedHistogram
     * @instance
     */
    SpeedHistogram.prototype.speedBin = $util.emptyArray;

    /**
     * SpeedHistogram observationCount.
     * @member {Array.<number>} observationCount
     * @memberof SpeedHistogram
     * @instance
     */
    SpeedHistogram.prototype.observationCount = $util.emptyArray;

    /**
     * Creates a new SpeedHistogram instance using the specified properties.
     * @function create
     * @memberof SpeedHistogram
     * @static
     * @param {ISpeedHistogram=} [properties] Properties to set
     * @returns {SpeedHistogram} SpeedHistogram instance
     */
    SpeedHistogram.create = function create(properties) {
        return new SpeedHistogram(properties);
    };

    /**
     * Encodes the specified SpeedHistogram message. Does not implicitly {@link SpeedHistogram.verify|verify} messages.
     * @function encode
     * @memberof SpeedHistogram
     * @static
     * @param {ISpeedHistogram} message SpeedHistogram message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpeedHistogram.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.speedBin != null && message.speedBin.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.speedBin.length; ++i)
                writer.uint32(message.speedBin[i]);
            writer.ldelim();
        }
        if (message.observationCount != null && message.observationCount.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.observationCount.length; ++i)
                writer.uint32(message.observationCount[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified SpeedHistogram message, length delimited. Does not implicitly {@link SpeedHistogram.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SpeedHistogram
     * @static
     * @param {ISpeedHistogram} message SpeedHistogram message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SpeedHistogram.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SpeedHistogram message from the specified reader or buffer.
     * @function decode
     * @memberof SpeedHistogram
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SpeedHistogram} SpeedHistogram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpeedHistogram.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SpeedHistogram();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.speedBin && message.speedBin.length))
                    message.speedBin = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.speedBin.push(reader.uint32());
                } else
                    message.speedBin.push(reader.uint32());
                break;
            case 2:
                if (!(message.observationCount && message.observationCount.length))
                    message.observationCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.observationCount.push(reader.uint32());
                } else
                    message.observationCount.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SpeedHistogram message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SpeedHistogram
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SpeedHistogram} SpeedHistogram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SpeedHistogram.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SpeedHistogram message.
     * @function verify
     * @memberof SpeedHistogram
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SpeedHistogram.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.speedBin != null && message.hasOwnProperty("speedBin")) {
            if (!Array.isArray(message.speedBin))
                return "speedBin: array expected";
            for (var i = 0; i < message.speedBin.length; ++i)
                if (!$util.isInteger(message.speedBin[i]))
                    return "speedBin: integer[] expected";
        }
        if (message.observationCount != null && message.hasOwnProperty("observationCount")) {
            if (!Array.isArray(message.observationCount))
                return "observationCount: array expected";
            for (var i = 0; i < message.observationCount.length; ++i)
                if (!$util.isInteger(message.observationCount[i]))
                    return "observationCount: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a SpeedHistogram message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SpeedHistogram
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SpeedHistogram} SpeedHistogram
     */
    SpeedHistogram.fromObject = function fromObject(object) {
        if (object instanceof $root.SpeedHistogram)
            return object;
        var message = new $root.SpeedHistogram();
        if (object.speedBin) {
            if (!Array.isArray(object.speedBin))
                throw TypeError(".SpeedHistogram.speedBin: array expected");
            message.speedBin = [];
            for (var i = 0; i < object.speedBin.length; ++i)
                message.speedBin[i] = object.speedBin[i] >>> 0;
        }
        if (object.observationCount) {
            if (!Array.isArray(object.observationCount))
                throw TypeError(".SpeedHistogram.observationCount: array expected");
            message.observationCount = [];
            for (var i = 0; i < object.observationCount.length; ++i)
                message.observationCount[i] = object.observationCount[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a SpeedHistogram message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SpeedHistogram
     * @static
     * @param {SpeedHistogram} message SpeedHistogram
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SpeedHistogram.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.speedBin = [];
            object.observationCount = [];
        }
        if (message.speedBin && message.speedBin.length) {
            object.speedBin = [];
            for (var j = 0; j < message.speedBin.length; ++j)
                object.speedBin[j] = message.speedBin[j];
        }
        if (message.observationCount && message.observationCount.length) {
            object.observationCount = [];
            for (var j = 0; j < message.observationCount.length; ++j)
                object.observationCount[j] = message.observationCount[j];
        }
        return object;
    };

    /**
     * Converts this SpeedHistogram to JSON.
     * @function toJSON
     * @memberof SpeedHistogram
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SpeedHistogram.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SpeedHistogram;
})();

$root.SharedStreetsWeeklySpeeds = (function() {

    /**
     * Properties of a SharedStreetsWeeklySpeeds.
     * @exports ISharedStreetsWeeklySpeeds
     * @interface ISharedStreetsWeeklySpeeds
     * @property {string|null} [referenceId] SharedStreetsWeeklySpeeds referenceId
     * @property {number|null} [year] SharedStreetsWeeklySpeeds year
     * @property {number|null} [month] SharedStreetsWeeklySpeeds month
     * @property {number|null} [day] SharedStreetsWeeklySpeeds day
     * @property {PeriodSize|null} [periodSize] SharedStreetsWeeklySpeeds periodSize
     * @property {boolean|null} [scaledCounts] SharedStreetsWeeklySpeeds scaledCounts
     * @property {Array.<number>|null} [periodOffset] SharedStreetsWeeklySpeeds periodOffset
     * @property {Array.<ISpeedHistogram>|null} [speedsForPeriod] SharedStreetsWeeklySpeeds speedsForPeriod
     */

    /**
     * Constructs a new SharedStreetsWeeklySpeeds.
     * @exports SharedStreetsWeeklySpeeds
     * @classdesc Represents a SharedStreetsWeeklySpeeds.
     * @implements ISharedStreetsWeeklySpeeds
     * @constructor
     * @param {ISharedStreetsWeeklySpeeds=} [properties] Properties to set
     */
    function SharedStreetsWeeklySpeeds(properties) {
        this.periodOffset = [];
        this.speedsForPeriod = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsWeeklySpeeds referenceId.
     * @member {string} referenceId
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.referenceId = "";

    /**
     * SharedStreetsWeeklySpeeds year.
     * @member {number} year
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.year = 0;

    /**
     * SharedStreetsWeeklySpeeds month.
     * @member {number} month
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.month = 0;

    /**
     * SharedStreetsWeeklySpeeds day.
     * @member {number} day
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.day = 0;

    /**
     * SharedStreetsWeeklySpeeds periodSize.
     * @member {PeriodSize} periodSize
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.periodSize = 0;

    /**
     * SharedStreetsWeeklySpeeds scaledCounts.
     * @member {boolean} scaledCounts
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.scaledCounts = false;

    /**
     * SharedStreetsWeeklySpeeds periodOffset.
     * @member {Array.<number>} periodOffset
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.periodOffset = $util.emptyArray;

    /**
     * SharedStreetsWeeklySpeeds speedsForPeriod.
     * @member {Array.<ISpeedHistogram>} speedsForPeriod
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     */
    SharedStreetsWeeklySpeeds.prototype.speedsForPeriod = $util.emptyArray;

    /**
     * Creates a new SharedStreetsWeeklySpeeds instance using the specified properties.
     * @function create
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {ISharedStreetsWeeklySpeeds=} [properties] Properties to set
     * @returns {SharedStreetsWeeklySpeeds} SharedStreetsWeeklySpeeds instance
     */
    SharedStreetsWeeklySpeeds.create = function create(properties) {
        return new SharedStreetsWeeklySpeeds(properties);
    };

    /**
     * Encodes the specified SharedStreetsWeeklySpeeds message. Does not implicitly {@link SharedStreetsWeeklySpeeds.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {ISharedStreetsWeeklySpeeds} message SharedStreetsWeeklySpeeds message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsWeeklySpeeds.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.referenceId);
        if (message.year != null && message.hasOwnProperty("year"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.year);
        if (message.month != null && message.hasOwnProperty("month"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.month);
        if (message.day != null && message.hasOwnProperty("day"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.day);
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.periodSize);
        if (message.scaledCounts != null && message.hasOwnProperty("scaledCounts"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.scaledCounts);
        if (message.periodOffset != null && message.periodOffset.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.periodOffset.length; ++i)
                writer.uint32(message.periodOffset[i]);
            writer.ldelim();
        }
        if (message.speedsForPeriod != null && message.speedsForPeriod.length)
            for (var i = 0; i < message.speedsForPeriod.length; ++i)
                $root.SpeedHistogram.encode(message.speedsForPeriod[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsWeeklySpeeds message, length delimited. Does not implicitly {@link SharedStreetsWeeklySpeeds.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {ISharedStreetsWeeklySpeeds} message SharedStreetsWeeklySpeeds message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsWeeklySpeeds.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsWeeklySpeeds message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsWeeklySpeeds} SharedStreetsWeeklySpeeds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsWeeklySpeeds.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsWeeklySpeeds();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.referenceId = reader.string();
                break;
            case 2:
                message.year = reader.uint32();
                break;
            case 3:
                message.month = reader.uint32();
                break;
            case 4:
                message.day = reader.uint32();
                break;
            case 5:
                message.periodSize = reader.int32();
                break;
            case 6:
                message.scaledCounts = reader.bool();
                break;
            case 7:
                if (!(message.periodOffset && message.periodOffset.length))
                    message.periodOffset = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.periodOffset.push(reader.uint32());
                } else
                    message.periodOffset.push(reader.uint32());
                break;
            case 8:
                if (!(message.speedsForPeriod && message.speedsForPeriod.length))
                    message.speedsForPeriod = [];
                message.speedsForPeriod.push($root.SpeedHistogram.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsWeeklySpeeds message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsWeeklySpeeds} SharedStreetsWeeklySpeeds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsWeeklySpeeds.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsWeeklySpeeds message.
     * @function verify
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsWeeklySpeeds.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            if (!$util.isString(message.referenceId))
                return "referenceId: string expected";
        if (message.year != null && message.hasOwnProperty("year"))
            if (!$util.isInteger(message.year))
                return "year: integer expected";
        if (message.month != null && message.hasOwnProperty("month"))
            if (!$util.isInteger(message.month))
                return "month: integer expected";
        if (message.day != null && message.hasOwnProperty("day"))
            if (!$util.isInteger(message.day))
                return "day: integer expected";
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            switch (message.periodSize) {
            default:
                return "periodSize: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
        if (message.scaledCounts != null && message.hasOwnProperty("scaledCounts"))
            if (typeof message.scaledCounts !== "boolean")
                return "scaledCounts: boolean expected";
        if (message.periodOffset != null && message.hasOwnProperty("periodOffset")) {
            if (!Array.isArray(message.periodOffset))
                return "periodOffset: array expected";
            for (var i = 0; i < message.periodOffset.length; ++i)
                if (!$util.isInteger(message.periodOffset[i]))
                    return "periodOffset: integer[] expected";
        }
        if (message.speedsForPeriod != null && message.hasOwnProperty("speedsForPeriod")) {
            if (!Array.isArray(message.speedsForPeriod))
                return "speedsForPeriod: array expected";
            for (var i = 0; i < message.speedsForPeriod.length; ++i) {
                var error = $root.SpeedHistogram.verify(message.speedsForPeriod[i]);
                if (error)
                    return "speedsForPeriod." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SharedStreetsWeeklySpeeds message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsWeeklySpeeds} SharedStreetsWeeklySpeeds
     */
    SharedStreetsWeeklySpeeds.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsWeeklySpeeds)
            return object;
        var message = new $root.SharedStreetsWeeklySpeeds();
        if (object.referenceId != null)
            message.referenceId = String(object.referenceId);
        if (object.year != null)
            message.year = object.year >>> 0;
        if (object.month != null)
            message.month = object.month >>> 0;
        if (object.day != null)
            message.day = object.day >>> 0;
        switch (object.periodSize) {
        case "OneSecond":
        case 0:
            message.periodSize = 0;
            break;
        case "FiveSeconds":
        case 1:
            message.periodSize = 1;
            break;
        case "TenSeconds":
        case 2:
            message.periodSize = 2;
            break;
        case "FifteenSeconds":
        case 3:
            message.periodSize = 3;
            break;
        case "ThirtySeconds":
        case 4:
            message.periodSize = 4;
            break;
        case "OneMinute":
        case 5:
            message.periodSize = 5;
            break;
        case "FiveMinutes":
        case 6:
            message.periodSize = 6;
            break;
        case "TenMinutes":
        case 7:
            message.periodSize = 7;
            break;
        case "FifteenMinutes":
        case 8:
            message.periodSize = 8;
            break;
        case "ThirtyMinutes":
        case 9:
            message.periodSize = 9;
            break;
        case "OneHour":
        case 10:
            message.periodSize = 10;
            break;
        case "OneDay":
        case 11:
            message.periodSize = 11;
            break;
        case "OneWeek":
        case 12:
            message.periodSize = 12;
            break;
        case "OneMonth":
        case 13:
            message.periodSize = 13;
            break;
        case "OneYear":
        case 14:
            message.periodSize = 14;
            break;
        }
        if (object.scaledCounts != null)
            message.scaledCounts = Boolean(object.scaledCounts);
        if (object.periodOffset) {
            if (!Array.isArray(object.periodOffset))
                throw TypeError(".SharedStreetsWeeklySpeeds.periodOffset: array expected");
            message.periodOffset = [];
            for (var i = 0; i < object.periodOffset.length; ++i)
                message.periodOffset[i] = object.periodOffset[i] >>> 0;
        }
        if (object.speedsForPeriod) {
            if (!Array.isArray(object.speedsForPeriod))
                throw TypeError(".SharedStreetsWeeklySpeeds.speedsForPeriod: array expected");
            message.speedsForPeriod = [];
            for (var i = 0; i < object.speedsForPeriod.length; ++i) {
                if (typeof object.speedsForPeriod[i] !== "object")
                    throw TypeError(".SharedStreetsWeeklySpeeds.speedsForPeriod: object expected");
                message.speedsForPeriod[i] = $root.SpeedHistogram.fromObject(object.speedsForPeriod[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsWeeklySpeeds message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsWeeklySpeeds
     * @static
     * @param {SharedStreetsWeeklySpeeds} message SharedStreetsWeeklySpeeds
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsWeeklySpeeds.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.periodOffset = [];
            object.speedsForPeriod = [];
        }
        if (options.defaults) {
            object.referenceId = "";
            object.year = 0;
            object.month = 0;
            object.day = 0;
            object.periodSize = options.enums === String ? "OneSecond" : 0;
            object.scaledCounts = false;
        }
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            object.referenceId = message.referenceId;
        if (message.year != null && message.hasOwnProperty("year"))
            object.year = message.year;
        if (message.month != null && message.hasOwnProperty("month"))
            object.month = message.month;
        if (message.day != null && message.hasOwnProperty("day"))
            object.day = message.day;
        if (message.periodSize != null && message.hasOwnProperty("periodSize"))
            object.periodSize = options.enums === String ? $root.PeriodSize[message.periodSize] : message.periodSize;
        if (message.scaledCounts != null && message.hasOwnProperty("scaledCounts"))
            object.scaledCounts = message.scaledCounts;
        if (message.periodOffset && message.periodOffset.length) {
            object.periodOffset = [];
            for (var j = 0; j < message.periodOffset.length; ++j)
                object.periodOffset[j] = message.periodOffset[j];
        }
        if (message.speedsForPeriod && message.speedsForPeriod.length) {
            object.speedsForPeriod = [];
            for (var j = 0; j < message.speedsForPeriod.length; ++j)
                object.speedsForPeriod[j] = $root.SpeedHistogram.toObject(message.speedsForPeriod[j], options);
        }
        return object;
    };

    /**
     * Converts this SharedStreetsWeeklySpeeds to JSON.
     * @function toJSON
     * @memberof SharedStreetsWeeklySpeeds
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsWeeklySpeeds.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedStreetsWeeklySpeeds;
})();

module.exports = $root;
