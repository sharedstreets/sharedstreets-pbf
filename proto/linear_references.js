/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LinearReference = (function() {

    /**
     * Properties of a LinearReference.
     * @exports ILinearReference
     * @interface ILinearReference
     * @property {number|Long|null} [startDistance] LinearReference startDistance
     * @property {number|Long|null} [endDistance] LinearReference endDistance
     */

    /**
     * Constructs a new LinearReference.
     * @exports LinearReference
     * @classdesc Represents a LinearReference.
     * @implements ILinearReference
     * @constructor
     * @param {ILinearReference=} [properties] Properties to set
     */
    function LinearReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LinearReference startDistance.
     * @member {number|Long} startDistance
     * @memberof LinearReference
     * @instance
     */
    LinearReference.prototype.startDistance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * LinearReference endDistance.
     * @member {number|Long} endDistance
     * @memberof LinearReference
     * @instance
     */
    LinearReference.prototype.endDistance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * LinearReference endDistancePresent.
     * @member {"endDistance"|undefined} endDistancePresent
     * @memberof LinearReference
     * @instance
     */
    Object.defineProperty(LinearReference.prototype, "endDistancePresent", {
        get: $util.oneOfGetter($oneOfFields = ["endDistance"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new LinearReference instance using the specified properties.
     * @function create
     * @memberof LinearReference
     * @static
     * @param {ILinearReference=} [properties] Properties to set
     * @returns {LinearReference} LinearReference instance
     */
    LinearReference.create = function create(properties) {
        return new LinearReference(properties);
    };

    /**
     * Encodes the specified LinearReference message. Does not implicitly {@link LinearReference.verify|verify} messages.
     * @function encode
     * @memberof LinearReference
     * @static
     * @param {ILinearReference} message LinearReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinearReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.startDistance != null && message.hasOwnProperty("startDistance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startDistance);
        if (message.endDistance != null && message.hasOwnProperty("endDistance"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.endDistance);
        return writer;
    };

    /**
     * Encodes the specified LinearReference message, length delimited. Does not implicitly {@link LinearReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LinearReference
     * @static
     * @param {ILinearReference} message LinearReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinearReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LinearReference message from the specified reader or buffer.
     * @function decode
     * @memberof LinearReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LinearReference} LinearReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinearReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LinearReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.startDistance = reader.uint64();
                break;
            case 2:
                message.endDistance = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LinearReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LinearReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LinearReference} LinearReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinearReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LinearReference message.
     * @function verify
     * @memberof LinearReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LinearReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.startDistance != null && message.hasOwnProperty("startDistance"))
            if (!$util.isInteger(message.startDistance) && !(message.startDistance && $util.isInteger(message.startDistance.low) && $util.isInteger(message.startDistance.high)))
                return "startDistance: integer|Long expected";
        if (message.endDistance != null && message.hasOwnProperty("endDistance")) {
            properties.endDistancePresent = 1;
            if (!$util.isInteger(message.endDistance) && !(message.endDistance && $util.isInteger(message.endDistance.low) && $util.isInteger(message.endDistance.high)))
                return "endDistance: integer|Long expected";
        }
        return null;
    };

    /**
     * Creates a LinearReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LinearReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LinearReference} LinearReference
     */
    LinearReference.fromObject = function fromObject(object) {
        if (object instanceof $root.LinearReference)
            return object;
        var message = new $root.LinearReference();
        if (object.startDistance != null)
            if ($util.Long)
                (message.startDistance = $util.Long.fromValue(object.startDistance)).unsigned = true;
            else if (typeof object.startDistance === "string")
                message.startDistance = parseInt(object.startDistance, 10);
            else if (typeof object.startDistance === "number")
                message.startDistance = object.startDistance;
            else if (typeof object.startDistance === "object")
                message.startDistance = new $util.LongBits(object.startDistance.low >>> 0, object.startDistance.high >>> 0).toNumber(true);
        if (object.endDistance != null)
            if ($util.Long)
                (message.endDistance = $util.Long.fromValue(object.endDistance)).unsigned = true;
            else if (typeof object.endDistance === "string")
                message.endDistance = parseInt(object.endDistance, 10);
            else if (typeof object.endDistance === "number")
                message.endDistance = object.endDistance;
            else if (typeof object.endDistance === "object")
                message.endDistance = new $util.LongBits(object.endDistance.low >>> 0, object.endDistance.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a LinearReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LinearReference
     * @static
     * @param {LinearReference} message LinearReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LinearReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.startDistance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.startDistance = options.longs === String ? "0" : 0;
        if (message.startDistance != null && message.hasOwnProperty("startDistance"))
            if (typeof message.startDistance === "number")
                object.startDistance = options.longs === String ? String(message.startDistance) : message.startDistance;
            else
                object.startDistance = options.longs === String ? $util.Long.prototype.toString.call(message.startDistance) : options.longs === Number ? new $util.LongBits(message.startDistance.low >>> 0, message.startDistance.high >>> 0).toNumber(true) : message.startDistance;
        if (message.endDistance != null && message.hasOwnProperty("endDistance")) {
            if (typeof message.endDistance === "number")
                object.endDistance = options.longs === String ? String(message.endDistance) : message.endDistance;
            else
                object.endDistance = options.longs === String ? $util.Long.prototype.toString.call(message.endDistance) : options.longs === Number ? new $util.LongBits(message.endDistance.low >>> 0, message.endDistance.high >>> 0).toNumber(true) : message.endDistance;
            if (options.oneofs)
                object.endDistancePresent = "endDistance";
        }
        return object;
    };

    /**
     * Converts this LinearReference to JSON.
     * @function toJSON
     * @memberof LinearReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LinearReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LinearReference;
})();

$root.SharedStreetsLinearReferences = (function() {

    /**
     * Properties of a SharedStreetsLinearReferences.
     * @exports ISharedStreetsLinearReferences
     * @interface ISharedStreetsLinearReferences
     * @property {string|null} [referenceId] SharedStreetsLinearReferences referenceId
     * @property {number|Long|null} [referenceLength] SharedStreetsLinearReferences referenceLength
     * @property {Array.<ILinearReference>|null} [references] SharedStreetsLinearReferences references
     */

    /**
     * Constructs a new SharedStreetsLinearReferences.
     * @exports SharedStreetsLinearReferences
     * @classdesc Represents a SharedStreetsLinearReferences.
     * @implements ISharedStreetsLinearReferences
     * @constructor
     * @param {ISharedStreetsLinearReferences=} [properties] Properties to set
     */
    function SharedStreetsLinearReferences(properties) {
        this.references = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsLinearReferences referenceId.
     * @member {string} referenceId
     * @memberof SharedStreetsLinearReferences
     * @instance
     */
    SharedStreetsLinearReferences.prototype.referenceId = "";

    /**
     * SharedStreetsLinearReferences referenceLength.
     * @member {number|Long} referenceLength
     * @memberof SharedStreetsLinearReferences
     * @instance
     */
    SharedStreetsLinearReferences.prototype.referenceLength = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SharedStreetsLinearReferences references.
     * @member {Array.<ILinearReference>} references
     * @memberof SharedStreetsLinearReferences
     * @instance
     */
    SharedStreetsLinearReferences.prototype.references = $util.emptyArray;

    /**
     * Creates a new SharedStreetsLinearReferences instance using the specified properties.
     * @function create
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {ISharedStreetsLinearReferences=} [properties] Properties to set
     * @returns {SharedStreetsLinearReferences} SharedStreetsLinearReferences instance
     */
    SharedStreetsLinearReferences.create = function create(properties) {
        return new SharedStreetsLinearReferences(properties);
    };

    /**
     * Encodes the specified SharedStreetsLinearReferences message. Does not implicitly {@link SharedStreetsLinearReferences.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {ISharedStreetsLinearReferences} message SharedStreetsLinearReferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsLinearReferences.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.referenceId);
        if (message.referenceLength != null && message.hasOwnProperty("referenceLength"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.referenceLength);
        if (message.references != null && message.references.length)
            for (var i = 0; i < message.references.length; ++i)
                $root.LinearReference.encode(message.references[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsLinearReferences message, length delimited. Does not implicitly {@link SharedStreetsLinearReferences.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {ISharedStreetsLinearReferences} message SharedStreetsLinearReferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsLinearReferences.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsLinearReferences message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsLinearReferences} SharedStreetsLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsLinearReferences.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsLinearReferences();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.referenceId = reader.string();
                break;
            case 2:
                message.referenceLength = reader.uint64();
                break;
            case 3:
                if (!(message.references && message.references.length))
                    message.references = [];
                message.references.push($root.LinearReference.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsLinearReferences message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsLinearReferences} SharedStreetsLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsLinearReferences.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsLinearReferences message.
     * @function verify
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsLinearReferences.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            if (!$util.isString(message.referenceId))
                return "referenceId: string expected";
        if (message.referenceLength != null && message.hasOwnProperty("referenceLength"))
            if (!$util.isInteger(message.referenceLength) && !(message.referenceLength && $util.isInteger(message.referenceLength.low) && $util.isInteger(message.referenceLength.high)))
                return "referenceLength: integer|Long expected";
        if (message.references != null && message.hasOwnProperty("references")) {
            if (!Array.isArray(message.references))
                return "references: array expected";
            for (var i = 0; i < message.references.length; ++i) {
                var error = $root.LinearReference.verify(message.references[i]);
                if (error)
                    return "references." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SharedStreetsLinearReferences message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsLinearReferences} SharedStreetsLinearReferences
     */
    SharedStreetsLinearReferences.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsLinearReferences)
            return object;
        var message = new $root.SharedStreetsLinearReferences();
        if (object.referenceId != null)
            message.referenceId = String(object.referenceId);
        if (object.referenceLength != null)
            if ($util.Long)
                (message.referenceLength = $util.Long.fromValue(object.referenceLength)).unsigned = true;
            else if (typeof object.referenceLength === "string")
                message.referenceLength = parseInt(object.referenceLength, 10);
            else if (typeof object.referenceLength === "number")
                message.referenceLength = object.referenceLength;
            else if (typeof object.referenceLength === "object")
                message.referenceLength = new $util.LongBits(object.referenceLength.low >>> 0, object.referenceLength.high >>> 0).toNumber(true);
        if (object.references) {
            if (!Array.isArray(object.references))
                throw TypeError(".SharedStreetsLinearReferences.references: array expected");
            message.references = [];
            for (var i = 0; i < object.references.length; ++i) {
                if (typeof object.references[i] !== "object")
                    throw TypeError(".SharedStreetsLinearReferences.references: object expected");
                message.references[i] = $root.LinearReference.fromObject(object.references[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsLinearReferences message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsLinearReferences
     * @static
     * @param {SharedStreetsLinearReferences} message SharedStreetsLinearReferences
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsLinearReferences.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.references = [];
        if (options.defaults) {
            object.referenceId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.referenceLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.referenceLength = options.longs === String ? "0" : 0;
        }
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            object.referenceId = message.referenceId;
        if (message.referenceLength != null && message.hasOwnProperty("referenceLength"))
            if (typeof message.referenceLength === "number")
                object.referenceLength = options.longs === String ? String(message.referenceLength) : message.referenceLength;
            else
                object.referenceLength = options.longs === String ? $util.Long.prototype.toString.call(message.referenceLength) : options.longs === Number ? new $util.LongBits(message.referenceLength.low >>> 0, message.referenceLength.high >>> 0).toNumber(true) : message.referenceLength;
        if (message.references && message.references.length) {
            object.references = [];
            for (var j = 0; j < message.references.length; ++j)
                object.references[j] = $root.LinearReference.toObject(message.references[j], options);
        }
        return object;
    };

    /**
     * Converts this SharedStreetsLinearReferences to JSON.
     * @function toJSON
     * @memberof SharedStreetsLinearReferences
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsLinearReferences.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedStreetsLinearReferences;
})();

$root.SharedStreetsBinnedLinearReferences = (function() {

    /**
     * Properties of a SharedStreetsBinnedLinearReferences.
     * @exports ISharedStreetsBinnedLinearReferences
     * @interface ISharedStreetsBinnedLinearReferences
     * @property {string|null} [referenceId] SharedStreetsBinnedLinearReferences referenceId
     * @property {number|Long|null} [referenceLength] SharedStreetsBinnedLinearReferences referenceLength
     * @property {number|null} [numberOfBins] SharedStreetsBinnedLinearReferences numberOfBins
     * @property {Array.<number>|null} [binPosition] SharedStreetsBinnedLinearReferences binPosition
     * @property {Array.<number>|null} [binValue] SharedStreetsBinnedLinearReferences binValue
     */

    /**
     * Constructs a new SharedStreetsBinnedLinearReferences.
     * @exports SharedStreetsBinnedLinearReferences
     * @classdesc Represents a SharedStreetsBinnedLinearReferences.
     * @implements ISharedStreetsBinnedLinearReferences
     * @constructor
     * @param {ISharedStreetsBinnedLinearReferences=} [properties] Properties to set
     */
    function SharedStreetsBinnedLinearReferences(properties) {
        this.binPosition = [];
        this.binValue = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsBinnedLinearReferences referenceId.
     * @member {string} referenceId
     * @memberof SharedStreetsBinnedLinearReferences
     * @instance
     */
    SharedStreetsBinnedLinearReferences.prototype.referenceId = "";

    /**
     * SharedStreetsBinnedLinearReferences referenceLength.
     * @member {number|Long} referenceLength
     * @memberof SharedStreetsBinnedLinearReferences
     * @instance
     */
    SharedStreetsBinnedLinearReferences.prototype.referenceLength = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SharedStreetsBinnedLinearReferences numberOfBins.
     * @member {number} numberOfBins
     * @memberof SharedStreetsBinnedLinearReferences
     * @instance
     */
    SharedStreetsBinnedLinearReferences.prototype.numberOfBins = 0;

    /**
     * SharedStreetsBinnedLinearReferences binPosition.
     * @member {Array.<number>} binPosition
     * @memberof SharedStreetsBinnedLinearReferences
     * @instance
     */
    SharedStreetsBinnedLinearReferences.prototype.binPosition = $util.emptyArray;

    /**
     * SharedStreetsBinnedLinearReferences binValue.
     * @member {Array.<number>} binValue
     * @memberof SharedStreetsBinnedLinearReferences
     * @instance
     */
    SharedStreetsBinnedLinearReferences.prototype.binValue = $util.emptyArray;

    /**
     * Creates a new SharedStreetsBinnedLinearReferences instance using the specified properties.
     * @function create
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {ISharedStreetsBinnedLinearReferences=} [properties] Properties to set
     * @returns {SharedStreetsBinnedLinearReferences} SharedStreetsBinnedLinearReferences instance
     */
    SharedStreetsBinnedLinearReferences.create = function create(properties) {
        return new SharedStreetsBinnedLinearReferences(properties);
    };

    /**
     * Encodes the specified SharedStreetsBinnedLinearReferences message. Does not implicitly {@link SharedStreetsBinnedLinearReferences.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {ISharedStreetsBinnedLinearReferences} message SharedStreetsBinnedLinearReferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsBinnedLinearReferences.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.referenceId);
        if (message.referenceLength != null && message.hasOwnProperty("referenceLength"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.referenceLength);
        if (message.numberOfBins != null && message.hasOwnProperty("numberOfBins"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.numberOfBins);
        if (message.binPosition != null && message.binPosition.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.binPosition.length; ++i)
                writer.uint32(message.binPosition[i]);
            writer.ldelim();
        }
        if (message.binValue != null && message.binValue.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.binValue.length; ++i)
                writer.double(message.binValue[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsBinnedLinearReferences message, length delimited. Does not implicitly {@link SharedStreetsBinnedLinearReferences.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {ISharedStreetsBinnedLinearReferences} message SharedStreetsBinnedLinearReferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsBinnedLinearReferences.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsBinnedLinearReferences message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsBinnedLinearReferences} SharedStreetsBinnedLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsBinnedLinearReferences.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsBinnedLinearReferences();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.referenceId = reader.string();
                break;
            case 2:
                message.referenceLength = reader.uint64();
                break;
            case 3:
                message.numberOfBins = reader.uint32();
                break;
            case 4:
                if (!(message.binPosition && message.binPosition.length))
                    message.binPosition = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.binPosition.push(reader.uint32());
                } else
                    message.binPosition.push(reader.uint32());
                break;
            case 5:
                if (!(message.binValue && message.binValue.length))
                    message.binValue = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.binValue.push(reader.double());
                } else
                    message.binValue.push(reader.double());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsBinnedLinearReferences message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsBinnedLinearReferences} SharedStreetsBinnedLinearReferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsBinnedLinearReferences.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsBinnedLinearReferences message.
     * @function verify
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsBinnedLinearReferences.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            if (!$util.isString(message.referenceId))
                return "referenceId: string expected";
        if (message.referenceLength != null && message.hasOwnProperty("referenceLength"))
            if (!$util.isInteger(message.referenceLength) && !(message.referenceLength && $util.isInteger(message.referenceLength.low) && $util.isInteger(message.referenceLength.high)))
                return "referenceLength: integer|Long expected";
        if (message.numberOfBins != null && message.hasOwnProperty("numberOfBins"))
            if (!$util.isInteger(message.numberOfBins))
                return "numberOfBins: integer expected";
        if (message.binPosition != null && message.hasOwnProperty("binPosition")) {
            if (!Array.isArray(message.binPosition))
                return "binPosition: array expected";
            for (var i = 0; i < message.binPosition.length; ++i)
                if (!$util.isInteger(message.binPosition[i]))
                    return "binPosition: integer[] expected";
        }
        if (message.binValue != null && message.hasOwnProperty("binValue")) {
            if (!Array.isArray(message.binValue))
                return "binValue: array expected";
            for (var i = 0; i < message.binValue.length; ++i)
                if (typeof message.binValue[i] !== "number")
                    return "binValue: number[] expected";
        }
        return null;
    };

    /**
     * Creates a SharedStreetsBinnedLinearReferences message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsBinnedLinearReferences} SharedStreetsBinnedLinearReferences
     */
    SharedStreetsBinnedLinearReferences.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsBinnedLinearReferences)
            return object;
        var message = new $root.SharedStreetsBinnedLinearReferences();
        if (object.referenceId != null)
            message.referenceId = String(object.referenceId);
        if (object.referenceLength != null)
            if ($util.Long)
                (message.referenceLength = $util.Long.fromValue(object.referenceLength)).unsigned = true;
            else if (typeof object.referenceLength === "string")
                message.referenceLength = parseInt(object.referenceLength, 10);
            else if (typeof object.referenceLength === "number")
                message.referenceLength = object.referenceLength;
            else if (typeof object.referenceLength === "object")
                message.referenceLength = new $util.LongBits(object.referenceLength.low >>> 0, object.referenceLength.high >>> 0).toNumber(true);
        if (object.numberOfBins != null)
            message.numberOfBins = object.numberOfBins >>> 0;
        if (object.binPosition) {
            if (!Array.isArray(object.binPosition))
                throw TypeError(".SharedStreetsBinnedLinearReferences.binPosition: array expected");
            message.binPosition = [];
            for (var i = 0; i < object.binPosition.length; ++i)
                message.binPosition[i] = object.binPosition[i] >>> 0;
        }
        if (object.binValue) {
            if (!Array.isArray(object.binValue))
                throw TypeError(".SharedStreetsBinnedLinearReferences.binValue: array expected");
            message.binValue = [];
            for (var i = 0; i < object.binValue.length; ++i)
                message.binValue[i] = Number(object.binValue[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsBinnedLinearReferences message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsBinnedLinearReferences
     * @static
     * @param {SharedStreetsBinnedLinearReferences} message SharedStreetsBinnedLinearReferences
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsBinnedLinearReferences.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.binPosition = [];
            object.binValue = [];
        }
        if (options.defaults) {
            object.referenceId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.referenceLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.referenceLength = options.longs === String ? "0" : 0;
            object.numberOfBins = 0;
        }
        if (message.referenceId != null && message.hasOwnProperty("referenceId"))
            object.referenceId = message.referenceId;
        if (message.referenceLength != null && message.hasOwnProperty("referenceLength"))
            if (typeof message.referenceLength === "number")
                object.referenceLength = options.longs === String ? String(message.referenceLength) : message.referenceLength;
            else
                object.referenceLength = options.longs === String ? $util.Long.prototype.toString.call(message.referenceLength) : options.longs === Number ? new $util.LongBits(message.referenceLength.low >>> 0, message.referenceLength.high >>> 0).toNumber(true) : message.referenceLength;
        if (message.numberOfBins != null && message.hasOwnProperty("numberOfBins"))
            object.numberOfBins = message.numberOfBins;
        if (message.binPosition && message.binPosition.length) {
            object.binPosition = [];
            for (var j = 0; j < message.binPosition.length; ++j)
                object.binPosition[j] = message.binPosition[j];
        }
        if (message.binValue && message.binValue.length) {
            object.binValue = [];
            for (var j = 0; j < message.binValue.length; ++j)
                object.binValue[j] = options.json && !isFinite(message.binValue[j]) ? String(message.binValue[j]) : message.binValue[j];
        }
        return object;
    };

    /**
     * Converts this SharedStreetsBinnedLinearReferences to JSON.
     * @function toJSON
     * @memberof SharedStreetsBinnedLinearReferences
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsBinnedLinearReferences.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedStreetsBinnedLinearReferences;
})();

module.exports = $root;
