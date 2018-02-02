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

module.exports = $root;
