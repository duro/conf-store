'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = logApplied;
function logApplied(applied, filter, node, criterion) {

    if (!applied) {
        return;
    }

    var record = {
        filter: filter
    };

    if (criterion) {
        if ((typeof criterion === 'undefined' ? 'undefined' : _typeof(criterion)) === 'object') {
            if (criterion.id) {
                record.valueId = criterion.id;
            } else {
                record.valueId = _typeof(criterion.value) === 'object' ? '[object]' : criterion.value.toString();
            }
        } else {
            record.valueId = criterion.toString();
        }
    }

    if (node && node.$id) {
        record.filterId = node.$id;
    }

    applied.push(record);
}
//# sourceMappingURL=log-applied.js.map