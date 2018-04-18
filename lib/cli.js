#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _tryRequire = require('try-require');

var _tryRequire2 = _interopRequireDefault(_tryRequire);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logDebug = (0, _debug2.default)('confStore');

function exit(message) {
  console.error(message);
  process.exit();
}

var argv = _yargs2.default.usage('Usage: $0 [store] -p [path] -f [filter] -o [file]').demand(['p', 'f', 'o']).demand(1).argv;
logDebug('args: ', argv);

var store = (0, _tryRequire2.default)(_path2.default.resolve(argv._[0]));
logDebug('path: ', _path2.default.resolve(argv._[0]));
logDebug('store: ', store);

if (!store) {
  exit('Err: path to store not found');
}

store = store.default ? store.default : store;

var filterParts = argv.f.split('=');
var filter = _defineProperty({}, filterParts[0], filterParts[1]);
logDebug(filter);

var results = store.get(argv.p, filter);
logDebug(results);

_fsExtra2.default.ensureDirSync(_path2.default.resolve(_path2.default.parse(argv.o).dir));
_jsonfile2.default.writeFileSync(_path2.default.resolve(argv.o), results);
process.exit();
//# sourceMappingURL=cli.js.map