"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

// TODO: make serialize required in next major version bump
var feed = _joi.default.object({
  output: _joi.default.string().required(),
  query: _joi.default.string().required(),
  title: _joi.default.string(),
  serialize: _joi.default.func(),
  match: _joi.default.string(),
  link: _joi.default.string()
}).unknown(true); // TODO: make feeds required in next major version bump


var _default = _joi.default.object({
  generator: _joi.default.string(),
  query: _joi.default.string(),
  setup: _joi.default.func(),
  feeds: _joi.default.array().items(feed)
}).unknown(true);

exports.default = _default;