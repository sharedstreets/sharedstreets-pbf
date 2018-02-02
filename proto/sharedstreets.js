/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Delimiter = (function() {

    /**
     * Properties of a Delimiter.
     * @exports IDelimiter
     * @interface IDelimiter
     * @property {number|null} [length] Delimiter length
     */

    /**
     * Constructs a new Delimiter.
     * @exports Delimiter
     * @classdesc Represents a Delimiter.
     * @implements IDelimiter
     * @constructor
     * @param {IDelimiter=} [properties] Properties to set
     */
    function Delimiter(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Delimiter length.
     * @member {number} length
     * @memberof Delimiter
     * @instance
     */
    Delimiter.prototype.length = 0;

    /**
     * Creates a new Delimiter instance using the specified properties.
     * @function create
     * @memberof Delimiter
     * @static
     * @param {IDelimiter=} [properties] Properties to set
     * @returns {Delimiter} Delimiter instance
     */
    Delimiter.create = function create(properties) {
        return new Delimiter(properties);
    };

    /**
     * Encodes the specified Delimiter message. Does not implicitly {@link Delimiter.verify|verify} messages.
     * @function encode
     * @memberof Delimiter
     * @static
     * @param {IDelimiter} message Delimiter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Delimiter.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.length != null && message.hasOwnProperty("length"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.length);
        return writer;
    };

    /**
     * Encodes the specified Delimiter message, length delimited. Does not implicitly {@link Delimiter.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Delimiter
     * @static
     * @param {IDelimiter} message Delimiter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Delimiter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Delimiter message from the specified reader or buffer.
     * @function decode
     * @memberof Delimiter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Delimiter} Delimiter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Delimiter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Delimiter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.length = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Delimiter message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Delimiter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Delimiter} Delimiter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Delimiter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Delimiter message.
     * @function verify
     * @memberof Delimiter
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Delimiter.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        return null;
    };

    /**
     * Creates a Delimiter message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Delimiter
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Delimiter} Delimiter
     */
    Delimiter.fromObject = function fromObject(object) {
        if (object instanceof $root.Delimiter)
            return object;
        var message = new $root.Delimiter();
        if (object.length != null)
            message.length = object.length >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Delimiter message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Delimiter
     * @static
     * @param {Delimiter} message Delimiter
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Delimiter.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.length = 0;
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        return object;
    };

    /**
     * Converts this Delimiter to JSON.
     * @function toJSON
     * @memberof Delimiter
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Delimiter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Delimiter;
})();

$root.GISSectionMetadata = (function() {

    /**
     * Properties of a GISSectionMetadata.
     * @exports IGISSectionMetadata
     * @interface IGISSectionMetadata
     * @property {string|null} [sectionId] GISSectionMetadata sectionId
     * @property {string|null} [sectionProperties] GISSectionMetadata sectionProperties
     */

    /**
     * Constructs a new GISSectionMetadata.
     * @exports GISSectionMetadata
     * @classdesc Represents a GISSectionMetadata.
     * @implements IGISSectionMetadata
     * @constructor
     * @param {IGISSectionMetadata=} [properties] Properties to set
     */
    function GISSectionMetadata(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GISSectionMetadata sectionId.
     * @member {string} sectionId
     * @memberof GISSectionMetadata
     * @instance
     */
    GISSectionMetadata.prototype.sectionId = "";

    /**
     * GISSectionMetadata sectionProperties.
     * @member {string} sectionProperties
     * @memberof GISSectionMetadata
     * @instance
     */
    GISSectionMetadata.prototype.sectionProperties = "";

    /**
     * Creates a new GISSectionMetadata instance using the specified properties.
     * @function create
     * @memberof GISSectionMetadata
     * @static
     * @param {IGISSectionMetadata=} [properties] Properties to set
     * @returns {GISSectionMetadata} GISSectionMetadata instance
     */
    GISSectionMetadata.create = function create(properties) {
        return new GISSectionMetadata(properties);
    };

    /**
     * Encodes the specified GISSectionMetadata message. Does not implicitly {@link GISSectionMetadata.verify|verify} messages.
     * @function encode
     * @memberof GISSectionMetadata
     * @static
     * @param {IGISSectionMetadata} message GISSectionMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GISSectionMetadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sectionId != null && message.hasOwnProperty("sectionId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sectionId);
        if (message.sectionProperties != null && message.hasOwnProperty("sectionProperties"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sectionProperties);
        return writer;
    };

    /**
     * Encodes the specified GISSectionMetadata message, length delimited. Does not implicitly {@link GISSectionMetadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GISSectionMetadata
     * @static
     * @param {IGISSectionMetadata} message GISSectionMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GISSectionMetadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GISSectionMetadata message from the specified reader or buffer.
     * @function decode
     * @memberof GISSectionMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GISSectionMetadata} GISSectionMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GISSectionMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GISSectionMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sectionId = reader.string();
                break;
            case 2:
                message.sectionProperties = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GISSectionMetadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GISSectionMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GISSectionMetadata} GISSectionMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GISSectionMetadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GISSectionMetadata message.
     * @function verify
     * @memberof GISSectionMetadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GISSectionMetadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sectionId != null && message.hasOwnProperty("sectionId"))
            if (!$util.isString(message.sectionId))
                return "sectionId: string expected";
        if (message.sectionProperties != null && message.hasOwnProperty("sectionProperties"))
            if (!$util.isString(message.sectionProperties))
                return "sectionProperties: string expected";
        return null;
    };

    /**
     * Creates a GISSectionMetadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GISSectionMetadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GISSectionMetadata} GISSectionMetadata
     */
    GISSectionMetadata.fromObject = function fromObject(object) {
        if (object instanceof $root.GISSectionMetadata)
            return object;
        var message = new $root.GISSectionMetadata();
        if (object.sectionId != null)
            message.sectionId = String(object.sectionId);
        if (object.sectionProperties != null)
            message.sectionProperties = String(object.sectionProperties);
        return message;
    };

    /**
     * Creates a plain object from a GISSectionMetadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GISSectionMetadata
     * @static
     * @param {GISSectionMetadata} message GISSectionMetadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GISSectionMetadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sectionId = "";
            object.sectionProperties = "";
        }
        if (message.sectionId != null && message.hasOwnProperty("sectionId"))
            object.sectionId = message.sectionId;
        if (message.sectionProperties != null && message.hasOwnProperty("sectionProperties"))
            object.sectionProperties = message.sectionProperties;
        return object;
    };

    /**
     * Converts this GISSectionMetadata to JSON.
     * @function toJSON
     * @memberof GISSectionMetadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GISSectionMetadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GISSectionMetadata;
})();

$root.GISMetadata = (function() {

    /**
     * Properties of a GISMetadata.
     * @exports IGISMetadata
     * @interface IGISMetadata
     * @property {string|null} [source] GISMetadata source
     * @property {Array.<IGISSectionMetadata>|null} [sections] GISMetadata sections
     */

    /**
     * Constructs a new GISMetadata.
     * @exports GISMetadata
     * @classdesc Represents a GISMetadata.
     * @implements IGISMetadata
     * @constructor
     * @param {IGISMetadata=} [properties] Properties to set
     */
    function GISMetadata(properties) {
        this.sections = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GISMetadata source.
     * @member {string} source
     * @memberof GISMetadata
     * @instance
     */
    GISMetadata.prototype.source = "";

    /**
     * GISMetadata sections.
     * @member {Array.<IGISSectionMetadata>} sections
     * @memberof GISMetadata
     * @instance
     */
    GISMetadata.prototype.sections = $util.emptyArray;

    /**
     * Creates a new GISMetadata instance using the specified properties.
     * @function create
     * @memberof GISMetadata
     * @static
     * @param {IGISMetadata=} [properties] Properties to set
     * @returns {GISMetadata} GISMetadata instance
     */
    GISMetadata.create = function create(properties) {
        return new GISMetadata(properties);
    };

    /**
     * Encodes the specified GISMetadata message. Does not implicitly {@link GISMetadata.verify|verify} messages.
     * @function encode
     * @memberof GISMetadata
     * @static
     * @param {IGISMetadata} message GISMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GISMetadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.source != null && message.hasOwnProperty("source"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.source);
        if (message.sections != null && message.sections.length)
            for (var i = 0; i < message.sections.length; ++i)
                $root.GISSectionMetadata.encode(message.sections[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GISMetadata message, length delimited. Does not implicitly {@link GISMetadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GISMetadata
     * @static
     * @param {IGISMetadata} message GISMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GISMetadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GISMetadata message from the specified reader or buffer.
     * @function decode
     * @memberof GISMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GISMetadata} GISMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GISMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GISMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.source = reader.string();
                break;
            case 2:
                if (!(message.sections && message.sections.length))
                    message.sections = [];
                message.sections.push($root.GISSectionMetadata.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GISMetadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GISMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GISMetadata} GISMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GISMetadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GISMetadata message.
     * @function verify
     * @memberof GISMetadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GISMetadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.sections != null && message.hasOwnProperty("sections")) {
            if (!Array.isArray(message.sections))
                return "sections: array expected";
            for (var i = 0; i < message.sections.length; ++i) {
                var error = $root.GISSectionMetadata.verify(message.sections[i]);
                if (error)
                    return "sections." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GISMetadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GISMetadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GISMetadata} GISMetadata
     */
    GISMetadata.fromObject = function fromObject(object) {
        if (object instanceof $root.GISMetadata)
            return object;
        var message = new $root.GISMetadata();
        if (object.source != null)
            message.source = String(object.source);
        if (object.sections) {
            if (!Array.isArray(object.sections))
                throw TypeError(".GISMetadata.sections: array expected");
            message.sections = [];
            for (var i = 0; i < object.sections.length; ++i) {
                if (typeof object.sections[i] !== "object")
                    throw TypeError(".GISMetadata.sections: object expected");
                message.sections[i] = $root.GISSectionMetadata.fromObject(object.sections[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GISMetadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GISMetadata
     * @static
     * @param {GISMetadata} message GISMetadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GISMetadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.sections = [];
        if (options.defaults)
            object.source = "";
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.sections && message.sections.length) {
            object.sections = [];
            for (var j = 0; j < message.sections.length; ++j)
                object.sections[j] = $root.GISSectionMetadata.toObject(message.sections[j], options);
        }
        return object;
    };

    /**
     * Converts this GISMetadata to JSON.
     * @function toJSON
     * @memberof GISMetadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GISMetadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GISMetadata;
})();

/**
 * RoadClass enum.
 * @exports RoadClass
 * @enum {string}
 * @property {number} Motorway=0 Motorway value
 * @property {number} Trunk=1 Trunk value
 * @property {number} Primary=2 Primary value
 * @property {number} Secondary=3 Secondary value
 * @property {number} Tertiary=4 Tertiary value
 * @property {number} Residential=5 Residential value
 * @property {number} Unclassified=6 Unclassified value
 * @property {number} Service=7 Service value
 * @property {number} Other=8 Other value
 */
$root.RoadClass = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Motorway"] = 0;
    values[valuesById[1] = "Trunk"] = 1;
    values[valuesById[2] = "Primary"] = 2;
    values[valuesById[3] = "Secondary"] = 3;
    values[valuesById[4] = "Tertiary"] = 4;
    values[valuesById[5] = "Residential"] = 5;
    values[valuesById[6] = "Unclassified"] = 6;
    values[valuesById[7] = "Service"] = 7;
    values[valuesById[8] = "Other"] = 8;
    return values;
})();

$root.WaySection = (function() {

    /**
     * Properties of a WaySection.
     * @exports IWaySection
     * @interface IWaySection
     * @property {number|Long|null} [wayId] WaySection wayId
     * @property {RoadClass|null} [roadClass] WaySection roadClass
     * @property {boolean|null} [oneWay] WaySection oneWay
     * @property {boolean|null} [roundabout] WaySection roundabout
     * @property {boolean|null} [link] WaySection link
     * @property {Array.<number|Long>|null} [nodeIds] WaySection nodeIds
     */

    /**
     * Constructs a new WaySection.
     * @exports WaySection
     * @classdesc Represents a WaySection.
     * @implements IWaySection
     * @constructor
     * @param {IWaySection=} [properties] Properties to set
     */
    function WaySection(properties) {
        this.nodeIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WaySection wayId.
     * @member {number|Long} wayId
     * @memberof WaySection
     * @instance
     */
    WaySection.prototype.wayId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * WaySection roadClass.
     * @member {RoadClass} roadClass
     * @memberof WaySection
     * @instance
     */
    WaySection.prototype.roadClass = 0;

    /**
     * WaySection oneWay.
     * @member {boolean} oneWay
     * @memberof WaySection
     * @instance
     */
    WaySection.prototype.oneWay = false;

    /**
     * WaySection roundabout.
     * @member {boolean} roundabout
     * @memberof WaySection
     * @instance
     */
    WaySection.prototype.roundabout = false;

    /**
     * WaySection link.
     * @member {boolean} link
     * @memberof WaySection
     * @instance
     */
    WaySection.prototype.link = false;

    /**
     * WaySection nodeIds.
     * @member {Array.<number|Long>} nodeIds
     * @memberof WaySection
     * @instance
     */
    WaySection.prototype.nodeIds = $util.emptyArray;

    /**
     * Creates a new WaySection instance using the specified properties.
     * @function create
     * @memberof WaySection
     * @static
     * @param {IWaySection=} [properties] Properties to set
     * @returns {WaySection} WaySection instance
     */
    WaySection.create = function create(properties) {
        return new WaySection(properties);
    };

    /**
     * Encodes the specified WaySection message. Does not implicitly {@link WaySection.verify|verify} messages.
     * @function encode
     * @memberof WaySection
     * @static
     * @param {IWaySection} message WaySection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaySection.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.wayId != null && message.hasOwnProperty("wayId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.wayId);
        if (message.roadClass != null && message.hasOwnProperty("roadClass"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roadClass);
        if (message.oneWay != null && message.hasOwnProperty("oneWay"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.oneWay);
        if (message.roundabout != null && message.hasOwnProperty("roundabout"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.roundabout);
        if (message.link != null && message.hasOwnProperty("link"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.link);
        if (message.nodeIds != null && message.nodeIds.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.nodeIds.length; ++i)
                writer.uint64(message.nodeIds[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified WaySection message, length delimited. Does not implicitly {@link WaySection.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WaySection
     * @static
     * @param {IWaySection} message WaySection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WaySection.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WaySection message from the specified reader or buffer.
     * @function decode
     * @memberof WaySection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WaySection} WaySection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaySection.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WaySection();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.wayId = reader.uint64();
                break;
            case 2:
                message.roadClass = reader.int32();
                break;
            case 3:
                message.oneWay = reader.bool();
                break;
            case 4:
                message.roundabout = reader.bool();
                break;
            case 5:
                message.link = reader.bool();
                break;
            case 6:
                if (!(message.nodeIds && message.nodeIds.length))
                    message.nodeIds = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.nodeIds.push(reader.uint64());
                } else
                    message.nodeIds.push(reader.uint64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WaySection message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WaySection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WaySection} WaySection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WaySection.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WaySection message.
     * @function verify
     * @memberof WaySection
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WaySection.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.wayId != null && message.hasOwnProperty("wayId"))
            if (!$util.isInteger(message.wayId) && !(message.wayId && $util.isInteger(message.wayId.low) && $util.isInteger(message.wayId.high)))
                return "wayId: integer|Long expected";
        if (message.roadClass != null && message.hasOwnProperty("roadClass"))
            switch (message.roadClass) {
            default:
                return "roadClass: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                break;
            }
        if (message.oneWay != null && message.hasOwnProperty("oneWay"))
            if (typeof message.oneWay !== "boolean")
                return "oneWay: boolean expected";
        if (message.roundabout != null && message.hasOwnProperty("roundabout"))
            if (typeof message.roundabout !== "boolean")
                return "roundabout: boolean expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (typeof message.link !== "boolean")
                return "link: boolean expected";
        if (message.nodeIds != null && message.hasOwnProperty("nodeIds")) {
            if (!Array.isArray(message.nodeIds))
                return "nodeIds: array expected";
            for (var i = 0; i < message.nodeIds.length; ++i)
                if (!$util.isInteger(message.nodeIds[i]) && !(message.nodeIds[i] && $util.isInteger(message.nodeIds[i].low) && $util.isInteger(message.nodeIds[i].high)))
                    return "nodeIds: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a WaySection message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WaySection
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WaySection} WaySection
     */
    WaySection.fromObject = function fromObject(object) {
        if (object instanceof $root.WaySection)
            return object;
        var message = new $root.WaySection();
        if (object.wayId != null)
            if ($util.Long)
                (message.wayId = $util.Long.fromValue(object.wayId)).unsigned = true;
            else if (typeof object.wayId === "string")
                message.wayId = parseInt(object.wayId, 10);
            else if (typeof object.wayId === "number")
                message.wayId = object.wayId;
            else if (typeof object.wayId === "object")
                message.wayId = new $util.LongBits(object.wayId.low >>> 0, object.wayId.high >>> 0).toNumber(true);
        switch (object.roadClass) {
        case "Motorway":
        case 0:
            message.roadClass = 0;
            break;
        case "Trunk":
        case 1:
            message.roadClass = 1;
            break;
        case "Primary":
        case 2:
            message.roadClass = 2;
            break;
        case "Secondary":
        case 3:
            message.roadClass = 3;
            break;
        case "Tertiary":
        case 4:
            message.roadClass = 4;
            break;
        case "Residential":
        case 5:
            message.roadClass = 5;
            break;
        case "Unclassified":
        case 6:
            message.roadClass = 6;
            break;
        case "Service":
        case 7:
            message.roadClass = 7;
            break;
        case "Other":
        case 8:
            message.roadClass = 8;
            break;
        }
        if (object.oneWay != null)
            message.oneWay = Boolean(object.oneWay);
        if (object.roundabout != null)
            message.roundabout = Boolean(object.roundabout);
        if (object.link != null)
            message.link = Boolean(object.link);
        if (object.nodeIds) {
            if (!Array.isArray(object.nodeIds))
                throw TypeError(".WaySection.nodeIds: array expected");
            message.nodeIds = [];
            for (var i = 0; i < object.nodeIds.length; ++i)
                if ($util.Long)
                    (message.nodeIds[i] = $util.Long.fromValue(object.nodeIds[i])).unsigned = true;
                else if (typeof object.nodeIds[i] === "string")
                    message.nodeIds[i] = parseInt(object.nodeIds[i], 10);
                else if (typeof object.nodeIds[i] === "number")
                    message.nodeIds[i] = object.nodeIds[i];
                else if (typeof object.nodeIds[i] === "object")
                    message.nodeIds[i] = new $util.LongBits(object.nodeIds[i].low >>> 0, object.nodeIds[i].high >>> 0).toNumber(true);
        }
        return message;
    };

    /**
     * Creates a plain object from a WaySection message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WaySection
     * @static
     * @param {WaySection} message WaySection
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WaySection.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.nodeIds = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.wayId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.wayId = options.longs === String ? "0" : 0;
            object.roadClass = options.enums === String ? "Motorway" : 0;
            object.oneWay = false;
            object.roundabout = false;
            object.link = false;
        }
        if (message.wayId != null && message.hasOwnProperty("wayId"))
            if (typeof message.wayId === "number")
                object.wayId = options.longs === String ? String(message.wayId) : message.wayId;
            else
                object.wayId = options.longs === String ? $util.Long.prototype.toString.call(message.wayId) : options.longs === Number ? new $util.LongBits(message.wayId.low >>> 0, message.wayId.high >>> 0).toNumber(true) : message.wayId;
        if (message.roadClass != null && message.hasOwnProperty("roadClass"))
            object.roadClass = options.enums === String ? $root.RoadClass[message.roadClass] : message.roadClass;
        if (message.oneWay != null && message.hasOwnProperty("oneWay"))
            object.oneWay = message.oneWay;
        if (message.roundabout != null && message.hasOwnProperty("roundabout"))
            object.roundabout = message.roundabout;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        if (message.nodeIds && message.nodeIds.length) {
            object.nodeIds = [];
            for (var j = 0; j < message.nodeIds.length; ++j)
                if (typeof message.nodeIds[j] === "number")
                    object.nodeIds[j] = options.longs === String ? String(message.nodeIds[j]) : message.nodeIds[j];
                else
                    object.nodeIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.nodeIds[j]) : options.longs === Number ? new $util.LongBits(message.nodeIds[j].low >>> 0, message.nodeIds[j].high >>> 0).toNumber(true) : message.nodeIds[j];
        }
        return object;
    };

    /**
     * Converts this WaySection to JSON.
     * @function toJSON
     * @memberof WaySection
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WaySection.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WaySection;
})();

$root.OSMMetadata = (function() {

    /**
     * Properties of a OSMMetadata.
     * @exports IOSMMetadata
     * @interface IOSMMetadata
     * @property {Array.<IWaySection>|null} [waySections] OSMMetadata waySections
     */

    /**
     * Constructs a new OSMMetadata.
     * @exports OSMMetadata
     * @classdesc Represents a OSMMetadata.
     * @implements IOSMMetadata
     * @constructor
     * @param {IOSMMetadata=} [properties] Properties to set
     */
    function OSMMetadata(properties) {
        this.waySections = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OSMMetadata waySections.
     * @member {Array.<IWaySection>} waySections
     * @memberof OSMMetadata
     * @instance
     */
    OSMMetadata.prototype.waySections = $util.emptyArray;

    /**
     * Creates a new OSMMetadata instance using the specified properties.
     * @function create
     * @memberof OSMMetadata
     * @static
     * @param {IOSMMetadata=} [properties] Properties to set
     * @returns {OSMMetadata} OSMMetadata instance
     */
    OSMMetadata.create = function create(properties) {
        return new OSMMetadata(properties);
    };

    /**
     * Encodes the specified OSMMetadata message. Does not implicitly {@link OSMMetadata.verify|verify} messages.
     * @function encode
     * @memberof OSMMetadata
     * @static
     * @param {IOSMMetadata} message OSMMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OSMMetadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.waySections != null && message.waySections.length)
            for (var i = 0; i < message.waySections.length; ++i)
                $root.WaySection.encode(message.waySections[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified OSMMetadata message, length delimited. Does not implicitly {@link OSMMetadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OSMMetadata
     * @static
     * @param {IOSMMetadata} message OSMMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OSMMetadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a OSMMetadata message from the specified reader or buffer.
     * @function decode
     * @memberof OSMMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OSMMetadata} OSMMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OSMMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OSMMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.waySections && message.waySections.length))
                    message.waySections = [];
                message.waySections.push($root.WaySection.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a OSMMetadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OSMMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OSMMetadata} OSMMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OSMMetadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a OSMMetadata message.
     * @function verify
     * @memberof OSMMetadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OSMMetadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.waySections != null && message.hasOwnProperty("waySections")) {
            if (!Array.isArray(message.waySections))
                return "waySections: array expected";
            for (var i = 0; i < message.waySections.length; ++i) {
                var error = $root.WaySection.verify(message.waySections[i]);
                if (error)
                    return "waySections." + error;
            }
        }
        return null;
    };

    /**
     * Creates a OSMMetadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OSMMetadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OSMMetadata} OSMMetadata
     */
    OSMMetadata.fromObject = function fromObject(object) {
        if (object instanceof $root.OSMMetadata)
            return object;
        var message = new $root.OSMMetadata();
        if (object.waySections) {
            if (!Array.isArray(object.waySections))
                throw TypeError(".OSMMetadata.waySections: array expected");
            message.waySections = [];
            for (var i = 0; i < object.waySections.length; ++i) {
                if (typeof object.waySections[i] !== "object")
                    throw TypeError(".OSMMetadata.waySections: object expected");
                message.waySections[i] = $root.WaySection.fromObject(object.waySections[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a OSMMetadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OSMMetadata
     * @static
     * @param {OSMMetadata} message OSMMetadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OSMMetadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.waySections = [];
        if (message.waySections && message.waySections.length) {
            object.waySections = [];
            for (var j = 0; j < message.waySections.length; ++j)
                object.waySections[j] = $root.WaySection.toObject(message.waySections[j], options);
        }
        return object;
    };

    /**
     * Converts this OSMMetadata to JSON.
     * @function toJSON
     * @memberof OSMMetadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OSMMetadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OSMMetadata;
})();

$root.SharedStreetsMetadata = (function() {

    /**
     * Properties of a SharedStreetsMetadata.
     * @exports ISharedStreetsMetadata
     * @interface ISharedStreetsMetadata
     * @property {string|null} [geometryId] SharedStreetsMetadata geometryId
     * @property {IOSMMetadata|null} [osmMetadata] SharedStreetsMetadata osmMetadata
     * @property {Array.<IGISMetadata>|null} [gisMetadata] SharedStreetsMetadata gisMetadata
     */

    /**
     * Constructs a new SharedStreetsMetadata.
     * @exports SharedStreetsMetadata
     * @classdesc Represents a SharedStreetsMetadata.
     * @implements ISharedStreetsMetadata
     * @constructor
     * @param {ISharedStreetsMetadata=} [properties] Properties to set
     */
    function SharedStreetsMetadata(properties) {
        this.gisMetadata = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsMetadata geometryId.
     * @member {string} geometryId
     * @memberof SharedStreetsMetadata
     * @instance
     */
    SharedStreetsMetadata.prototype.geometryId = "";

    /**
     * SharedStreetsMetadata osmMetadata.
     * @member {IOSMMetadata|null|undefined} osmMetadata
     * @memberof SharedStreetsMetadata
     * @instance
     */
    SharedStreetsMetadata.prototype.osmMetadata = null;

    /**
     * SharedStreetsMetadata gisMetadata.
     * @member {Array.<IGISMetadata>} gisMetadata
     * @memberof SharedStreetsMetadata
     * @instance
     */
    SharedStreetsMetadata.prototype.gisMetadata = $util.emptyArray;

    /**
     * Creates a new SharedStreetsMetadata instance using the specified properties.
     * @function create
     * @memberof SharedStreetsMetadata
     * @static
     * @param {ISharedStreetsMetadata=} [properties] Properties to set
     * @returns {SharedStreetsMetadata} SharedStreetsMetadata instance
     */
    SharedStreetsMetadata.create = function create(properties) {
        return new SharedStreetsMetadata(properties);
    };

    /**
     * Encodes the specified SharedStreetsMetadata message. Does not implicitly {@link SharedStreetsMetadata.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsMetadata
     * @static
     * @param {ISharedStreetsMetadata} message SharedStreetsMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsMetadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.geometryId != null && message.hasOwnProperty("geometryId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.geometryId);
        if (message.osmMetadata != null && message.hasOwnProperty("osmMetadata"))
            $root.OSMMetadata.encode(message.osmMetadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.gisMetadata != null && message.gisMetadata.length)
            for (var i = 0; i < message.gisMetadata.length; ++i)
                $root.GISMetadata.encode(message.gisMetadata[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsMetadata message, length delimited. Does not implicitly {@link SharedStreetsMetadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsMetadata
     * @static
     * @param {ISharedStreetsMetadata} message SharedStreetsMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsMetadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsMetadata message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsMetadata} SharedStreetsMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.geometryId = reader.string();
                break;
            case 2:
                message.osmMetadata = $root.OSMMetadata.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.gisMetadata && message.gisMetadata.length))
                    message.gisMetadata = [];
                message.gisMetadata.push($root.GISMetadata.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsMetadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsMetadata} SharedStreetsMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsMetadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsMetadata message.
     * @function verify
     * @memberof SharedStreetsMetadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsMetadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.geometryId != null && message.hasOwnProperty("geometryId"))
            if (!$util.isString(message.geometryId))
                return "geometryId: string expected";
        if (message.osmMetadata != null && message.hasOwnProperty("osmMetadata")) {
            var error = $root.OSMMetadata.verify(message.osmMetadata);
            if (error)
                return "osmMetadata." + error;
        }
        if (message.gisMetadata != null && message.hasOwnProperty("gisMetadata")) {
            if (!Array.isArray(message.gisMetadata))
                return "gisMetadata: array expected";
            for (var i = 0; i < message.gisMetadata.length; ++i) {
                var error = $root.GISMetadata.verify(message.gisMetadata[i]);
                if (error)
                    return "gisMetadata." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SharedStreetsMetadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsMetadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsMetadata} SharedStreetsMetadata
     */
    SharedStreetsMetadata.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsMetadata)
            return object;
        var message = new $root.SharedStreetsMetadata();
        if (object.geometryId != null)
            message.geometryId = String(object.geometryId);
        if (object.osmMetadata != null) {
            if (typeof object.osmMetadata !== "object")
                throw TypeError(".SharedStreetsMetadata.osmMetadata: object expected");
            message.osmMetadata = $root.OSMMetadata.fromObject(object.osmMetadata);
        }
        if (object.gisMetadata) {
            if (!Array.isArray(object.gisMetadata))
                throw TypeError(".SharedStreetsMetadata.gisMetadata: array expected");
            message.gisMetadata = [];
            for (var i = 0; i < object.gisMetadata.length; ++i) {
                if (typeof object.gisMetadata[i] !== "object")
                    throw TypeError(".SharedStreetsMetadata.gisMetadata: object expected");
                message.gisMetadata[i] = $root.GISMetadata.fromObject(object.gisMetadata[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsMetadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsMetadata
     * @static
     * @param {SharedStreetsMetadata} message SharedStreetsMetadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsMetadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.gisMetadata = [];
        if (options.defaults) {
            object.geometryId = "";
            object.osmMetadata = null;
        }
        if (message.geometryId != null && message.hasOwnProperty("geometryId"))
            object.geometryId = message.geometryId;
        if (message.osmMetadata != null && message.hasOwnProperty("osmMetadata"))
            object.osmMetadata = $root.OSMMetadata.toObject(message.osmMetadata, options);
        if (message.gisMetadata && message.gisMetadata.length) {
            object.gisMetadata = [];
            for (var j = 0; j < message.gisMetadata.length; ++j)
                object.gisMetadata[j] = $root.GISMetadata.toObject(message.gisMetadata[j], options);
        }
        return object;
    };

    /**
     * Converts this SharedStreetsMetadata to JSON.
     * @function toJSON
     * @memberof SharedStreetsMetadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsMetadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedStreetsMetadata;
})();

$root.SharedStreetsGeometry = (function() {

    /**
     * Properties of a SharedStreetsGeometry.
     * @exports ISharedStreetsGeometry
     * @interface ISharedStreetsGeometry
     * @property {string|null} [id] SharedStreetsGeometry id
     * @property {string|null} [fromIntersectionId] SharedStreetsGeometry fromIntersectionId
     * @property {string|null} [toIntersectionId] SharedStreetsGeometry toIntersectionId
     * @property {string|null} [forwardReferenceId] SharedStreetsGeometry forwardReferenceId
     * @property {string|null} [backReferenceId] SharedStreetsGeometry backReferenceId
     * @property {RoadClass|null} [roadClass] SharedStreetsGeometry roadClass
     * @property {Array.<number>|null} [lonlats] SharedStreetsGeometry lonlats
     */

    /**
     * Constructs a new SharedStreetsGeometry.
     * @exports SharedStreetsGeometry
     * @classdesc Represents a SharedStreetsGeometry.
     * @implements ISharedStreetsGeometry
     * @constructor
     * @param {ISharedStreetsGeometry=} [properties] Properties to set
     */
    function SharedStreetsGeometry(properties) {
        this.lonlats = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsGeometry id.
     * @member {string} id
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.id = "";

    /**
     * SharedStreetsGeometry fromIntersectionId.
     * @member {string} fromIntersectionId
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.fromIntersectionId = "";

    /**
     * SharedStreetsGeometry toIntersectionId.
     * @member {string} toIntersectionId
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.toIntersectionId = "";

    /**
     * SharedStreetsGeometry forwardReferenceId.
     * @member {string} forwardReferenceId
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.forwardReferenceId = "";

    /**
     * SharedStreetsGeometry backReferenceId.
     * @member {string} backReferenceId
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.backReferenceId = "";

    /**
     * SharedStreetsGeometry roadClass.
     * @member {RoadClass} roadClass
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.roadClass = 0;

    /**
     * SharedStreetsGeometry lonlats.
     * @member {Array.<number>} lonlats
     * @memberof SharedStreetsGeometry
     * @instance
     */
    SharedStreetsGeometry.prototype.lonlats = $util.emptyArray;

    /**
     * Creates a new SharedStreetsGeometry instance using the specified properties.
     * @function create
     * @memberof SharedStreetsGeometry
     * @static
     * @param {ISharedStreetsGeometry=} [properties] Properties to set
     * @returns {SharedStreetsGeometry} SharedStreetsGeometry instance
     */
    SharedStreetsGeometry.create = function create(properties) {
        return new SharedStreetsGeometry(properties);
    };

    /**
     * Encodes the specified SharedStreetsGeometry message. Does not implicitly {@link SharedStreetsGeometry.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsGeometry
     * @static
     * @param {ISharedStreetsGeometry} message SharedStreetsGeometry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsGeometry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.fromIntersectionId != null && message.hasOwnProperty("fromIntersectionId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromIntersectionId);
        if (message.toIntersectionId != null && message.hasOwnProperty("toIntersectionId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.toIntersectionId);
        if (message.forwardReferenceId != null && message.hasOwnProperty("forwardReferenceId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.forwardReferenceId);
        if (message.backReferenceId != null && message.hasOwnProperty("backReferenceId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.backReferenceId);
        if (message.roadClass != null && message.hasOwnProperty("roadClass"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roadClass);
        if (message.lonlats != null && message.lonlats.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.lonlats.length; ++i)
                writer.double(message.lonlats[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsGeometry message, length delimited. Does not implicitly {@link SharedStreetsGeometry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsGeometry
     * @static
     * @param {ISharedStreetsGeometry} message SharedStreetsGeometry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsGeometry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsGeometry message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsGeometry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsGeometry} SharedStreetsGeometry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsGeometry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsGeometry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.fromIntersectionId = reader.string();
                break;
            case 3:
                message.toIntersectionId = reader.string();
                break;
            case 4:
                message.forwardReferenceId = reader.string();
                break;
            case 5:
                message.backReferenceId = reader.string();
                break;
            case 6:
                message.roadClass = reader.int32();
                break;
            case 7:
                if (!(message.lonlats && message.lonlats.length))
                    message.lonlats = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.lonlats.push(reader.double());
                } else
                    message.lonlats.push(reader.double());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsGeometry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsGeometry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsGeometry} SharedStreetsGeometry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsGeometry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsGeometry message.
     * @function verify
     * @memberof SharedStreetsGeometry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsGeometry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.fromIntersectionId != null && message.hasOwnProperty("fromIntersectionId"))
            if (!$util.isString(message.fromIntersectionId))
                return "fromIntersectionId: string expected";
        if (message.toIntersectionId != null && message.hasOwnProperty("toIntersectionId"))
            if (!$util.isString(message.toIntersectionId))
                return "toIntersectionId: string expected";
        if (message.forwardReferenceId != null && message.hasOwnProperty("forwardReferenceId"))
            if (!$util.isString(message.forwardReferenceId))
                return "forwardReferenceId: string expected";
        if (message.backReferenceId != null && message.hasOwnProperty("backReferenceId"))
            if (!$util.isString(message.backReferenceId))
                return "backReferenceId: string expected";
        if (message.roadClass != null && message.hasOwnProperty("roadClass"))
            switch (message.roadClass) {
            default:
                return "roadClass: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                break;
            }
        if (message.lonlats != null && message.hasOwnProperty("lonlats")) {
            if (!Array.isArray(message.lonlats))
                return "lonlats: array expected";
            for (var i = 0; i < message.lonlats.length; ++i)
                if (typeof message.lonlats[i] !== "number")
                    return "lonlats: number[] expected";
        }
        return null;
    };

    /**
     * Creates a SharedStreetsGeometry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsGeometry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsGeometry} SharedStreetsGeometry
     */
    SharedStreetsGeometry.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsGeometry)
            return object;
        var message = new $root.SharedStreetsGeometry();
        if (object.id != null)
            message.id = String(object.id);
        if (object.fromIntersectionId != null)
            message.fromIntersectionId = String(object.fromIntersectionId);
        if (object.toIntersectionId != null)
            message.toIntersectionId = String(object.toIntersectionId);
        if (object.forwardReferenceId != null)
            message.forwardReferenceId = String(object.forwardReferenceId);
        if (object.backReferenceId != null)
            message.backReferenceId = String(object.backReferenceId);
        switch (object.roadClass) {
        case "Motorway":
        case 0:
            message.roadClass = 0;
            break;
        case "Trunk":
        case 1:
            message.roadClass = 1;
            break;
        case "Primary":
        case 2:
            message.roadClass = 2;
            break;
        case "Secondary":
        case 3:
            message.roadClass = 3;
            break;
        case "Tertiary":
        case 4:
            message.roadClass = 4;
            break;
        case "Residential":
        case 5:
            message.roadClass = 5;
            break;
        case "Unclassified":
        case 6:
            message.roadClass = 6;
            break;
        case "Service":
        case 7:
            message.roadClass = 7;
            break;
        case "Other":
        case 8:
            message.roadClass = 8;
            break;
        }
        if (object.lonlats) {
            if (!Array.isArray(object.lonlats))
                throw TypeError(".SharedStreetsGeometry.lonlats: array expected");
            message.lonlats = [];
            for (var i = 0; i < object.lonlats.length; ++i)
                message.lonlats[i] = Number(object.lonlats[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsGeometry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsGeometry
     * @static
     * @param {SharedStreetsGeometry} message SharedStreetsGeometry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsGeometry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.lonlats = [];
        if (options.defaults) {
            object.id = "";
            object.fromIntersectionId = "";
            object.toIntersectionId = "";
            object.forwardReferenceId = "";
            object.backReferenceId = "";
            object.roadClass = options.enums === String ? "Motorway" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.fromIntersectionId != null && message.hasOwnProperty("fromIntersectionId"))
            object.fromIntersectionId = message.fromIntersectionId;
        if (message.toIntersectionId != null && message.hasOwnProperty("toIntersectionId"))
            object.toIntersectionId = message.toIntersectionId;
        if (message.forwardReferenceId != null && message.hasOwnProperty("forwardReferenceId"))
            object.forwardReferenceId = message.forwardReferenceId;
        if (message.backReferenceId != null && message.hasOwnProperty("backReferenceId"))
            object.backReferenceId = message.backReferenceId;
        if (message.roadClass != null && message.hasOwnProperty("roadClass"))
            object.roadClass = options.enums === String ? $root.RoadClass[message.roadClass] : message.roadClass;
        if (message.lonlats && message.lonlats.length) {
            object.lonlats = [];
            for (var j = 0; j < message.lonlats.length; ++j)
                object.lonlats[j] = options.json && !isFinite(message.lonlats[j]) ? String(message.lonlats[j]) : message.lonlats[j];
        }
        return object;
    };

    /**
     * Converts this SharedStreetsGeometry to JSON.
     * @function toJSON
     * @memberof SharedStreetsGeometry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsGeometry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedStreetsGeometry;
})();

$root.LocationReference = (function() {

    /**
     * Properties of a LocationReference.
     * @exports ILocationReference
     * @interface ILocationReference
     * @property {string|null} [intersectionId] LocationReference intersectionId
     * @property {number|null} [lon] LocationReference lon
     * @property {number|null} [lat] LocationReference lat
     * @property {number|null} [inboundBearing] LocationReference inboundBearing
     * @property {number|null} [outboundBearing] LocationReference outboundBearing
     * @property {number|null} [distanceToNextRef] LocationReference distanceToNextRef
     */

    /**
     * Constructs a new LocationReference.
     * @exports LocationReference
     * @classdesc Represents a LocationReference.
     * @implements ILocationReference
     * @constructor
     * @param {ILocationReference=} [properties] Properties to set
     */
    function LocationReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LocationReference intersectionId.
     * @member {string} intersectionId
     * @memberof LocationReference
     * @instance
     */
    LocationReference.prototype.intersectionId = "";

    /**
     * LocationReference lon.
     * @member {number} lon
     * @memberof LocationReference
     * @instance
     */
    LocationReference.prototype.lon = 0;

    /**
     * LocationReference lat.
     * @member {number} lat
     * @memberof LocationReference
     * @instance
     */
    LocationReference.prototype.lat = 0;

    /**
     * LocationReference inboundBearing.
     * @member {number} inboundBearing
     * @memberof LocationReference
     * @instance
     */
    LocationReference.prototype.inboundBearing = 0;

    /**
     * LocationReference outboundBearing.
     * @member {number} outboundBearing
     * @memberof LocationReference
     * @instance
     */
    LocationReference.prototype.outboundBearing = 0;

    /**
     * LocationReference distanceToNextRef.
     * @member {number} distanceToNextRef
     * @memberof LocationReference
     * @instance
     */
    LocationReference.prototype.distanceToNextRef = 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * LocationReference inboundBearingPresent.
     * @member {"inboundBearing"|undefined} inboundBearingPresent
     * @memberof LocationReference
     * @instance
     */
    Object.defineProperty(LocationReference.prototype, "inboundBearingPresent", {
        get: $util.oneOfGetter($oneOfFields = ["inboundBearing"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * LocationReference outboundBearingPresent.
     * @member {"outboundBearing"|undefined} outboundBearingPresent
     * @memberof LocationReference
     * @instance
     */
    Object.defineProperty(LocationReference.prototype, "outboundBearingPresent", {
        get: $util.oneOfGetter($oneOfFields = ["outboundBearing"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * LocationReference distanceToNextRefPresent.
     * @member {"distanceToNextRef"|undefined} distanceToNextRefPresent
     * @memberof LocationReference
     * @instance
     */
    Object.defineProperty(LocationReference.prototype, "distanceToNextRefPresent", {
        get: $util.oneOfGetter($oneOfFields = ["distanceToNextRef"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new LocationReference instance using the specified properties.
     * @function create
     * @memberof LocationReference
     * @static
     * @param {ILocationReference=} [properties] Properties to set
     * @returns {LocationReference} LocationReference instance
     */
    LocationReference.create = function create(properties) {
        return new LocationReference(properties);
    };

    /**
     * Encodes the specified LocationReference message. Does not implicitly {@link LocationReference.verify|verify} messages.
     * @function encode
     * @memberof LocationReference
     * @static
     * @param {ILocationReference} message LocationReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LocationReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.intersectionId != null && message.hasOwnProperty("intersectionId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.intersectionId);
        if (message.lon != null && message.hasOwnProperty("lon"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.lon);
        if (message.lat != null && message.hasOwnProperty("lat"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.lat);
        if (message.inboundBearing != null && message.hasOwnProperty("inboundBearing"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.inboundBearing);
        if (message.outboundBearing != null && message.hasOwnProperty("outboundBearing"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.outboundBearing);
        if (message.distanceToNextRef != null && message.hasOwnProperty("distanceToNextRef"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.distanceToNextRef);
        return writer;
    };

    /**
     * Encodes the specified LocationReference message, length delimited. Does not implicitly {@link LocationReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LocationReference
     * @static
     * @param {ILocationReference} message LocationReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LocationReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LocationReference message from the specified reader or buffer.
     * @function decode
     * @memberof LocationReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LocationReference} LocationReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LocationReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LocationReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.intersectionId = reader.string();
                break;
            case 2:
                message.lon = reader.double();
                break;
            case 3:
                message.lat = reader.double();
                break;
            case 4:
                message.inboundBearing = reader.int32();
                break;
            case 5:
                message.outboundBearing = reader.int32();
                break;
            case 6:
                message.distanceToNextRef = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LocationReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LocationReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LocationReference} LocationReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LocationReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LocationReference message.
     * @function verify
     * @memberof LocationReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LocationReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.intersectionId != null && message.hasOwnProperty("intersectionId"))
            if (!$util.isString(message.intersectionId))
                return "intersectionId: string expected";
        if (message.lon != null && message.hasOwnProperty("lon"))
            if (typeof message.lon !== "number")
                return "lon: number expected";
        if (message.lat != null && message.hasOwnProperty("lat"))
            if (typeof message.lat !== "number")
                return "lat: number expected";
        if (message.inboundBearing != null && message.hasOwnProperty("inboundBearing")) {
            properties.inboundBearingPresent = 1;
            if (!$util.isInteger(message.inboundBearing))
                return "inboundBearing: integer expected";
        }
        if (message.outboundBearing != null && message.hasOwnProperty("outboundBearing")) {
            properties.outboundBearingPresent = 1;
            if (!$util.isInteger(message.outboundBearing))
                return "outboundBearing: integer expected";
        }
        if (message.distanceToNextRef != null && message.hasOwnProperty("distanceToNextRef")) {
            properties.distanceToNextRefPresent = 1;
            if (!$util.isInteger(message.distanceToNextRef))
                return "distanceToNextRef: integer expected";
        }
        return null;
    };

    /**
     * Creates a LocationReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LocationReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LocationReference} LocationReference
     */
    LocationReference.fromObject = function fromObject(object) {
        if (object instanceof $root.LocationReference)
            return object;
        var message = new $root.LocationReference();
        if (object.intersectionId != null)
            message.intersectionId = String(object.intersectionId);
        if (object.lon != null)
            message.lon = Number(object.lon);
        if (object.lat != null)
            message.lat = Number(object.lat);
        if (object.inboundBearing != null)
            message.inboundBearing = object.inboundBearing | 0;
        if (object.outboundBearing != null)
            message.outboundBearing = object.outboundBearing | 0;
        if (object.distanceToNextRef != null)
            message.distanceToNextRef = object.distanceToNextRef | 0;
        return message;
    };

    /**
     * Creates a plain object from a LocationReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LocationReference
     * @static
     * @param {LocationReference} message LocationReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LocationReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.intersectionId = "";
            object.lon = 0;
            object.lat = 0;
        }
        if (message.intersectionId != null && message.hasOwnProperty("intersectionId"))
            object.intersectionId = message.intersectionId;
        if (message.lon != null && message.hasOwnProperty("lon"))
            object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
        if (message.lat != null && message.hasOwnProperty("lat"))
            object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
        if (message.inboundBearing != null && message.hasOwnProperty("inboundBearing")) {
            object.inboundBearing = message.inboundBearing;
            if (options.oneofs)
                object.inboundBearingPresent = "inboundBearing";
        }
        if (message.outboundBearing != null && message.hasOwnProperty("outboundBearing")) {
            object.outboundBearing = message.outboundBearing;
            if (options.oneofs)
                object.outboundBearingPresent = "outboundBearing";
        }
        if (message.distanceToNextRef != null && message.hasOwnProperty("distanceToNextRef")) {
            object.distanceToNextRef = message.distanceToNextRef;
            if (options.oneofs)
                object.distanceToNextRefPresent = "distanceToNextRef";
        }
        return object;
    };

    /**
     * Converts this LocationReference to JSON.
     * @function toJSON
     * @memberof LocationReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LocationReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LocationReference;
})();

$root.SharedStreetsReference = (function() {

    /**
     * Properties of a SharedStreetsReference.
     * @exports ISharedStreetsReference
     * @interface ISharedStreetsReference
     * @property {string|null} [id] SharedStreetsReference id
     * @property {string|null} [geometryId] SharedStreetsReference geometryId
     * @property {SharedStreetsReference.FormOfWay|null} [formOfWay] SharedStreetsReference formOfWay
     * @property {Array.<ILocationReference>|null} [locationReferences] SharedStreetsReference locationReferences
     */

    /**
     * Constructs a new SharedStreetsReference.
     * @exports SharedStreetsReference
     * @classdesc Represents a SharedStreetsReference.
     * @implements ISharedStreetsReference
     * @constructor
     * @param {ISharedStreetsReference=} [properties] Properties to set
     */
    function SharedStreetsReference(properties) {
        this.locationReferences = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsReference id.
     * @member {string} id
     * @memberof SharedStreetsReference
     * @instance
     */
    SharedStreetsReference.prototype.id = "";

    /**
     * SharedStreetsReference geometryId.
     * @member {string} geometryId
     * @memberof SharedStreetsReference
     * @instance
     */
    SharedStreetsReference.prototype.geometryId = "";

    /**
     * SharedStreetsReference formOfWay.
     * @member {SharedStreetsReference.FormOfWay} formOfWay
     * @memberof SharedStreetsReference
     * @instance
     */
    SharedStreetsReference.prototype.formOfWay = 0;

    /**
     * SharedStreetsReference locationReferences.
     * @member {Array.<ILocationReference>} locationReferences
     * @memberof SharedStreetsReference
     * @instance
     */
    SharedStreetsReference.prototype.locationReferences = $util.emptyArray;

    /**
     * Creates a new SharedStreetsReference instance using the specified properties.
     * @function create
     * @memberof SharedStreetsReference
     * @static
     * @param {ISharedStreetsReference=} [properties] Properties to set
     * @returns {SharedStreetsReference} SharedStreetsReference instance
     */
    SharedStreetsReference.create = function create(properties) {
        return new SharedStreetsReference(properties);
    };

    /**
     * Encodes the specified SharedStreetsReference message. Does not implicitly {@link SharedStreetsReference.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsReference
     * @static
     * @param {ISharedStreetsReference} message SharedStreetsReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.geometryId != null && message.hasOwnProperty("geometryId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.geometryId);
        if (message.formOfWay != null && message.hasOwnProperty("formOfWay"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.formOfWay);
        if (message.locationReferences != null && message.locationReferences.length)
            for (var i = 0; i < message.locationReferences.length; ++i)
                $root.LocationReference.encode(message.locationReferences[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsReference message, length delimited. Does not implicitly {@link SharedStreetsReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsReference
     * @static
     * @param {ISharedStreetsReference} message SharedStreetsReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsReference message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsReference} SharedStreetsReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.geometryId = reader.string();
                break;
            case 3:
                message.formOfWay = reader.int32();
                break;
            case 4:
                if (!(message.locationReferences && message.locationReferences.length))
                    message.locationReferences = [];
                message.locationReferences.push($root.LocationReference.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsReference} SharedStreetsReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsReference message.
     * @function verify
     * @memberof SharedStreetsReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.geometryId != null && message.hasOwnProperty("geometryId"))
            if (!$util.isString(message.geometryId))
                return "geometryId: string expected";
        if (message.formOfWay != null && message.hasOwnProperty("formOfWay"))
            switch (message.formOfWay) {
            default:
                return "formOfWay: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.locationReferences != null && message.hasOwnProperty("locationReferences")) {
            if (!Array.isArray(message.locationReferences))
                return "locationReferences: array expected";
            for (var i = 0; i < message.locationReferences.length; ++i) {
                var error = $root.LocationReference.verify(message.locationReferences[i]);
                if (error)
                    return "locationReferences." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SharedStreetsReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsReference} SharedStreetsReference
     */
    SharedStreetsReference.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsReference)
            return object;
        var message = new $root.SharedStreetsReference();
        if (object.id != null)
            message.id = String(object.id);
        if (object.geometryId != null)
            message.geometryId = String(object.geometryId);
        switch (object.formOfWay) {
        case "Undefined":
        case 0:
            message.formOfWay = 0;
            break;
        case "Motorway":
        case 1:
            message.formOfWay = 1;
            break;
        case "MultipleCarriageway":
        case 2:
            message.formOfWay = 2;
            break;
        case "SingleCarriageway":
        case 3:
            message.formOfWay = 3;
            break;
        case "Roundabout":
        case 4:
            message.formOfWay = 4;
            break;
        case "TrafficSquare":
        case 5:
            message.formOfWay = 5;
            break;
        case "SlipRoad":
        case 6:
            message.formOfWay = 6;
            break;
        case "Other":
        case 7:
            message.formOfWay = 7;
            break;
        }
        if (object.locationReferences) {
            if (!Array.isArray(object.locationReferences))
                throw TypeError(".SharedStreetsReference.locationReferences: array expected");
            message.locationReferences = [];
            for (var i = 0; i < object.locationReferences.length; ++i) {
                if (typeof object.locationReferences[i] !== "object")
                    throw TypeError(".SharedStreetsReference.locationReferences: object expected");
                message.locationReferences[i] = $root.LocationReference.fromObject(object.locationReferences[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsReference
     * @static
     * @param {SharedStreetsReference} message SharedStreetsReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.locationReferences = [];
        if (options.defaults) {
            object.id = "";
            object.geometryId = "";
            object.formOfWay = options.enums === String ? "Undefined" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.geometryId != null && message.hasOwnProperty("geometryId"))
            object.geometryId = message.geometryId;
        if (message.formOfWay != null && message.hasOwnProperty("formOfWay"))
            object.formOfWay = options.enums === String ? $root.SharedStreetsReference.FormOfWay[message.formOfWay] : message.formOfWay;
        if (message.locationReferences && message.locationReferences.length) {
            object.locationReferences = [];
            for (var j = 0; j < message.locationReferences.length; ++j)
                object.locationReferences[j] = $root.LocationReference.toObject(message.locationReferences[j], options);
        }
        return object;
    };

    /**
     * Converts this SharedStreetsReference to JSON.
     * @function toJSON
     * @memberof SharedStreetsReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * FormOfWay enum.
     * @name SharedStreetsReference.FormOfWay
     * @enum {string}
     * @property {number} Undefined=0 Undefined value
     * @property {number} Motorway=1 Motorway value
     * @property {number} MultipleCarriageway=2 MultipleCarriageway value
     * @property {number} SingleCarriageway=3 SingleCarriageway value
     * @property {number} Roundabout=4 Roundabout value
     * @property {number} TrafficSquare=5 TrafficSquare value
     * @property {number} SlipRoad=6 SlipRoad value
     * @property {number} Other=7 Other value
     */
    SharedStreetsReference.FormOfWay = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Undefined"] = 0;
        values[valuesById[1] = "Motorway"] = 1;
        values[valuesById[2] = "MultipleCarriageway"] = 2;
        values[valuesById[3] = "SingleCarriageway"] = 3;
        values[valuesById[4] = "Roundabout"] = 4;
        values[valuesById[5] = "TrafficSquare"] = 5;
        values[valuesById[6] = "SlipRoad"] = 6;
        values[valuesById[7] = "Other"] = 7;
        return values;
    })();

    return SharedStreetsReference;
})();

$root.SharedStreetsIntersection = (function() {

    /**
     * Properties of a SharedStreetsIntersection.
     * @exports ISharedStreetsIntersection
     * @interface ISharedStreetsIntersection
     * @property {string|null} [id] SharedStreetsIntersection id
     * @property {number|Long|null} [nodeId] SharedStreetsIntersection nodeId
     * @property {number|null} [lon] SharedStreetsIntersection lon
     * @property {number|null} [lat] SharedStreetsIntersection lat
     * @property {Array.<string>|null} [inboundReferenceIds] SharedStreetsIntersection inboundReferenceIds
     * @property {Array.<string>|null} [outboundReferenceIds] SharedStreetsIntersection outboundReferenceIds
     */

    /**
     * Constructs a new SharedStreetsIntersection.
     * @exports SharedStreetsIntersection
     * @classdesc Represents a SharedStreetsIntersection.
     * @implements ISharedStreetsIntersection
     * @constructor
     * @param {ISharedStreetsIntersection=} [properties] Properties to set
     */
    function SharedStreetsIntersection(properties) {
        this.inboundReferenceIds = [];
        this.outboundReferenceIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedStreetsIntersection id.
     * @member {string} id
     * @memberof SharedStreetsIntersection
     * @instance
     */
    SharedStreetsIntersection.prototype.id = "";

    /**
     * SharedStreetsIntersection nodeId.
     * @member {number|Long} nodeId
     * @memberof SharedStreetsIntersection
     * @instance
     */
    SharedStreetsIntersection.prototype.nodeId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SharedStreetsIntersection lon.
     * @member {number} lon
     * @memberof SharedStreetsIntersection
     * @instance
     */
    SharedStreetsIntersection.prototype.lon = 0;

    /**
     * SharedStreetsIntersection lat.
     * @member {number} lat
     * @memberof SharedStreetsIntersection
     * @instance
     */
    SharedStreetsIntersection.prototype.lat = 0;

    /**
     * SharedStreetsIntersection inboundReferenceIds.
     * @member {Array.<string>} inboundReferenceIds
     * @memberof SharedStreetsIntersection
     * @instance
     */
    SharedStreetsIntersection.prototype.inboundReferenceIds = $util.emptyArray;

    /**
     * SharedStreetsIntersection outboundReferenceIds.
     * @member {Array.<string>} outboundReferenceIds
     * @memberof SharedStreetsIntersection
     * @instance
     */
    SharedStreetsIntersection.prototype.outboundReferenceIds = $util.emptyArray;

    /**
     * Creates a new SharedStreetsIntersection instance using the specified properties.
     * @function create
     * @memberof SharedStreetsIntersection
     * @static
     * @param {ISharedStreetsIntersection=} [properties] Properties to set
     * @returns {SharedStreetsIntersection} SharedStreetsIntersection instance
     */
    SharedStreetsIntersection.create = function create(properties) {
        return new SharedStreetsIntersection(properties);
    };

    /**
     * Encodes the specified SharedStreetsIntersection message. Does not implicitly {@link SharedStreetsIntersection.verify|verify} messages.
     * @function encode
     * @memberof SharedStreetsIntersection
     * @static
     * @param {ISharedStreetsIntersection} message SharedStreetsIntersection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsIntersection.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.nodeId != null && message.hasOwnProperty("nodeId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.nodeId);
        if (message.lon != null && message.hasOwnProperty("lon"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.lon);
        if (message.lat != null && message.hasOwnProperty("lat"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.lat);
        if (message.inboundReferenceIds != null && message.inboundReferenceIds.length)
            for (var i = 0; i < message.inboundReferenceIds.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.inboundReferenceIds[i]);
        if (message.outboundReferenceIds != null && message.outboundReferenceIds.length)
            for (var i = 0; i < message.outboundReferenceIds.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.outboundReferenceIds[i]);
        return writer;
    };

    /**
     * Encodes the specified SharedStreetsIntersection message, length delimited. Does not implicitly {@link SharedStreetsIntersection.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SharedStreetsIntersection
     * @static
     * @param {ISharedStreetsIntersection} message SharedStreetsIntersection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedStreetsIntersection.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedStreetsIntersection message from the specified reader or buffer.
     * @function decode
     * @memberof SharedStreetsIntersection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SharedStreetsIntersection} SharedStreetsIntersection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsIntersection.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SharedStreetsIntersection();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.nodeId = reader.uint64();
                break;
            case 3:
                message.lon = reader.double();
                break;
            case 4:
                message.lat = reader.double();
                break;
            case 5:
                if (!(message.inboundReferenceIds && message.inboundReferenceIds.length))
                    message.inboundReferenceIds = [];
                message.inboundReferenceIds.push(reader.string());
                break;
            case 6:
                if (!(message.outboundReferenceIds && message.outboundReferenceIds.length))
                    message.outboundReferenceIds = [];
                message.outboundReferenceIds.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SharedStreetsIntersection message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SharedStreetsIntersection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SharedStreetsIntersection} SharedStreetsIntersection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedStreetsIntersection.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedStreetsIntersection message.
     * @function verify
     * @memberof SharedStreetsIntersection
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedStreetsIntersection.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.nodeId != null && message.hasOwnProperty("nodeId"))
            if (!$util.isInteger(message.nodeId) && !(message.nodeId && $util.isInteger(message.nodeId.low) && $util.isInteger(message.nodeId.high)))
                return "nodeId: integer|Long expected";
        if (message.lon != null && message.hasOwnProperty("lon"))
            if (typeof message.lon !== "number")
                return "lon: number expected";
        if (message.lat != null && message.hasOwnProperty("lat"))
            if (typeof message.lat !== "number")
                return "lat: number expected";
        if (message.inboundReferenceIds != null && message.hasOwnProperty("inboundReferenceIds")) {
            if (!Array.isArray(message.inboundReferenceIds))
                return "inboundReferenceIds: array expected";
            for (var i = 0; i < message.inboundReferenceIds.length; ++i)
                if (!$util.isString(message.inboundReferenceIds[i]))
                    return "inboundReferenceIds: string[] expected";
        }
        if (message.outboundReferenceIds != null && message.hasOwnProperty("outboundReferenceIds")) {
            if (!Array.isArray(message.outboundReferenceIds))
                return "outboundReferenceIds: array expected";
            for (var i = 0; i < message.outboundReferenceIds.length; ++i)
                if (!$util.isString(message.outboundReferenceIds[i]))
                    return "outboundReferenceIds: string[] expected";
        }
        return null;
    };

    /**
     * Creates a SharedStreetsIntersection message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SharedStreetsIntersection
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SharedStreetsIntersection} SharedStreetsIntersection
     */
    SharedStreetsIntersection.fromObject = function fromObject(object) {
        if (object instanceof $root.SharedStreetsIntersection)
            return object;
        var message = new $root.SharedStreetsIntersection();
        if (object.id != null)
            message.id = String(object.id);
        if (object.nodeId != null)
            if ($util.Long)
                (message.nodeId = $util.Long.fromValue(object.nodeId)).unsigned = true;
            else if (typeof object.nodeId === "string")
                message.nodeId = parseInt(object.nodeId, 10);
            else if (typeof object.nodeId === "number")
                message.nodeId = object.nodeId;
            else if (typeof object.nodeId === "object")
                message.nodeId = new $util.LongBits(object.nodeId.low >>> 0, object.nodeId.high >>> 0).toNumber(true);
        if (object.lon != null)
            message.lon = Number(object.lon);
        if (object.lat != null)
            message.lat = Number(object.lat);
        if (object.inboundReferenceIds) {
            if (!Array.isArray(object.inboundReferenceIds))
                throw TypeError(".SharedStreetsIntersection.inboundReferenceIds: array expected");
            message.inboundReferenceIds = [];
            for (var i = 0; i < object.inboundReferenceIds.length; ++i)
                message.inboundReferenceIds[i] = String(object.inboundReferenceIds[i]);
        }
        if (object.outboundReferenceIds) {
            if (!Array.isArray(object.outboundReferenceIds))
                throw TypeError(".SharedStreetsIntersection.outboundReferenceIds: array expected");
            message.outboundReferenceIds = [];
            for (var i = 0; i < object.outboundReferenceIds.length; ++i)
                message.outboundReferenceIds[i] = String(object.outboundReferenceIds[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a SharedStreetsIntersection message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SharedStreetsIntersection
     * @static
     * @param {SharedStreetsIntersection} message SharedStreetsIntersection
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedStreetsIntersection.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.inboundReferenceIds = [];
            object.outboundReferenceIds = [];
        }
        if (options.defaults) {
            object.id = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.nodeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nodeId = options.longs === String ? "0" : 0;
            object.lon = 0;
            object.lat = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.nodeId != null && message.hasOwnProperty("nodeId"))
            if (typeof message.nodeId === "number")
                object.nodeId = options.longs === String ? String(message.nodeId) : message.nodeId;
            else
                object.nodeId = options.longs === String ? $util.Long.prototype.toString.call(message.nodeId) : options.longs === Number ? new $util.LongBits(message.nodeId.low >>> 0, message.nodeId.high >>> 0).toNumber(true) : message.nodeId;
        if (message.lon != null && message.hasOwnProperty("lon"))
            object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
        if (message.lat != null && message.hasOwnProperty("lat"))
            object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
        if (message.inboundReferenceIds && message.inboundReferenceIds.length) {
            object.inboundReferenceIds = [];
            for (var j = 0; j < message.inboundReferenceIds.length; ++j)
                object.inboundReferenceIds[j] = message.inboundReferenceIds[j];
        }
        if (message.outboundReferenceIds && message.outboundReferenceIds.length) {
            object.outboundReferenceIds = [];
            for (var j = 0; j < message.outboundReferenceIds.length; ++j)
                object.outboundReferenceIds[j] = message.outboundReferenceIds[j];
        }
        return object;
    };

    /**
     * Converts this SharedStreetsIntersection to JSON.
     * @function toJSON
     * @memberof SharedStreetsIntersection
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedStreetsIntersection.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedStreetsIntersection;
})();

module.exports = $root;
